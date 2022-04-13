
import React, { useState } from 'react'
import GeoChart from './components/geoChart/GeoChart'
import data from './components/geoChart/GeoChart.world.geo.json'
import './App.scss'
import Intro from './components/intro'

function App() {
    const [property, setProperty] = useState('formal_en')
    const [inputData, setInputData] = useState('')

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
                <div className="input-area">
                    <input
                        type="text"
                        placeholder={'Enter Name Countries...'}
                        name="input"
                        onChange={handleInput}
                        value={inputData}
                    />
                    {inputData && <ResetButton />}
                </div>
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


