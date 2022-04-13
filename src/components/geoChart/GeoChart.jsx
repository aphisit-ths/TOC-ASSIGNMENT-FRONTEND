import React, { useRef, useEffect, useState } from 'react'
import { select, geoPath, geoMercator, min, max, scaleLinear } from 'd3'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import useResizeObserver from './useResizeObserver'

import './geoChart.scss'
/**
 * Component that renders a map of Germany.
 */

function GeoChart({ data }) {
    const svgRef = useRef()
    const wrapperRef = useRef()
    const dimensions = useResizeObserver(wrapperRef)
    const [selectedCountry, setSelectedCountry] = useState(null)
    let navigate = useNavigate()
    let location = useLocation()

    // will be called initially and on every data change
    useEffect(() => {
        const svg = select(svgRef.current)

        const minProp = min(
            data.features,
            (feature) => feature.properties['pop_est']
        )
        const maxProp = max(
            data.features,
            (feature) => feature.properties['pop_est']
        )
        const colorScale = scaleLinear()
            .domain([minProp, maxProp])
            .range(['#ffff', '#f4f4f4'])

        // use resized dimensions
        // but fall back to getBoundingClientRect, if no dimensions yet.
        const { width, height } =
            dimensions || wrapperRef.current.getBoundingClientRect()

        // projects geo-coordinates on a 2D plane
        const projection = geoMercator()
            .fitSize([width, height], selectedCountry || data)
            .precision(250)

        // takes geojson data,
        // transforms that into the d attribute of a path element
        const pathGenerator = geoPath().projection(projection)

        //Tooltips when hovers
        var tooldiv = select('.geochartRoot')
            .append('div')
            .attr('class', 'tooltip')
            .style('visibility', 'hidden')
            .style('position', 'absolute')

        svg.selectAll('.country')
            .data(data.features)
            .join('path')
            .on('click', (event, feature) => {
                setSelectedCountry(selectedCountry === feature ? null : feature)
                tooldiv.style('visibility', 'hidden')
                const naviagete = () => {
                    navigate(
                        `${feature.properties.name.toLowerCase()}` +
                            location.search
                    )
                }
                setTimeout(naviagete, 1500)
            })
            .on('mouseover', (e, d) => {
                tooldiv.style('visibility', 'visible').text(d.properties.name)
            })
            .on('mousemove', (e, d) => {
                tooldiv
                    .style('top', e.pageY - 50 + 'px')
                    .style('left', e.pageX - 50 + 'px')
            })
            .on('mouseout', () => {
                tooldiv.style('visibility', 'hidden')
            })
            .attr('class', 'country')
            .transition()
            .duration(500)
            .attr('fill', '#f1f1f1')
            .attr('fill', (feature) =>
                colorScale(feature.properties['pop_est'])
            )
            .attr('d', (feature) => pathGenerator(feature))

        // render text

        svg.selectAll('.label')
            .data([selectedCountry])
            .join('text')
            .attr('class', 'label')
            .text(
                (feature) =>
                    feature && feature.properties['name'].toLocaleString()
            )
            .attr('x', 50)
            .attr('y', 100)
    }, [data, dimensions, selectedCountry, location.search, navigate])

    return (
        <div ref={wrapperRef} className="geochartRoot">
            <svg className="svg-wrapper" ref={svgRef}>
                {' '}
            </svg>{' '}
        </div>
    )
}

export default GeoChart
