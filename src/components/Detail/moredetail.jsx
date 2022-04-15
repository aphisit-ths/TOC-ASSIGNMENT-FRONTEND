import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import './moredetail.scss'
import axios from 'axios'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
function MoreDetail() {
    const [country, setCountry] = useState()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const location = useLocation()
    const { id } = useParams()
    useEffect(() => {
        async function getAllCountry() {
            try {
                const res = await axios.get(
                    'https://countries-api-service.herokuapp.com/' + id
                )
                if (res && res.data) {
                    setCountry(res.data[0])
                    setLoading(false)
                    console.log(res.data[0])
                }
            } catch (error) {
                setLoading(true)
            }
        }
        getAllCountry()
    }, [])
    const unKnowFlag =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Flag.svg/600px-Flag.svg.png'
    if (loading)
        return (
            <div className="MoreDetail">
                <p>loading</p>
            </div>
        )
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
            exit={{ opacity: 0 }}
            className="moredetail-root"
        >
            <div className="title-section">
                <span
                    onClick={() => navigate('/#map' + location.search)}
                    className="back-btn"
                >
                    {' '}
                    {'<'} Back
                </span>
                <span className="cappital-name">
                    Capital : {country ? country.capital : 'NA'}
                </span>
                <h1 className="country-name">{country ? country.name : id} </h1>
                <h2 className="president-name">
                    {country ? country.headOfGoverment : 'NaN'}{' '}
                </h2>
            </div>
            <div className="img-section">
                <div className="flag-img">
                    <img
                        src={country ? country.flagUrl : unKnowFlag}
                        alt={country ? country.flagUrl : unKnowFlag}
                    />
                </div>
                <div className="map-img">
                    <img
                        src={country ? country.mapUrl : unKnowFlag}
                        alt={country ? country.mapUrl : unKnowFlag}
                    />
                </div>
            </div>
            <div className="info-section">
                <p className="info">{country ? country.info : 'NA'}</p>
            </div>
        </motion.div>
    )
}

export default MoreDetail
