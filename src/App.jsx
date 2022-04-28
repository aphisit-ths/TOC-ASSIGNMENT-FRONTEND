import React, { useState, useEffect } from 'react'
import GeoChart from './components/geoChart/GeoChart'
import data from './components/geoChart/GeoChart.world.geo.json'
import './App.scss'
import Intro from './components/intro'
import axios from 'axios'
import { motion } from 'framer-motion'
import Footer from './components/footer/footer'
function App() {
    const [property, setProperty] = useState('formal_en')
    // useEffect(() => {
    //     async function getAllCountry() {
    //         try {
    //             const res = await axios.get(
    //                 'https://countries-api-service.herokuapp.com/'
    //             )
    //             console.log(res)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     getAllCountry()
    // }, [])

    return (
        <div className="root">
            <Intro />
            <div className="box" id="map">
                <GeoChart data={data} property={property} />
            </div>
            <Footer></Footer>
        </div>
    )
}

export default App

// Devolop by Aphisit Thupsaeng , Sarin Hongthong
