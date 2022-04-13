import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Counrty from './counrty'
import './countries.scss'

function Countries() {
    let navigate = useNavigate()
    let location = useLocation()
    let countries = require('../../Databases/data.json')
    // สำหรับการ for loop ไปเอา data มาแต่ละตัว แล้วไปเียกใช้ใน component
    const listCounrty = countries.map((country) => (
        <Counrty country={country} />
    ))

    return <div className="counrty-root">{listCounrty}</div>
}

export default Countries
