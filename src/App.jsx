import React, { useState, useEffect } from 'react'
import GeoChart from './components/geoChart/GeoChart'
import data from './components/geoChart/GeoChart.world.geo.json'
import './App.scss'
import Intro from './components/intro'
import axios from 'axios'
import { motion } from 'framer-motion'
function App() {
    const [property, setProperty] = useState('formal_en')
    const [inputData, setInputData] = useState('')
    const [countries, setCountries] = useState()

    function handleInput(event) {
        //ไว้สำหรับดัก event ข้อมูลเวลากรอก input เพื่อจะมา update state
        setInputData(event.target.value)
    }
    function clearInput() {
        setInputData('')
    }

    function ResetButton() {
        return (
            <div onClick={clearInput} className="clear-input">
                <p>X</p>{' '}
            </div>
        )
    }

    return (
        <div className="root">
            <Intro />
            <div className="box" id="map">
                <GeoChart
                    data={data}
                    property={property}
                    setInputData={setInputData}
                />
            </div>
        </div>
    )
}

export default App

// Devolop by Aphisit Thupsaeng , Sarin Hongthong
