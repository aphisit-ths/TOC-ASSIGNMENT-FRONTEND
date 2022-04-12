import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Countries from './components/countries'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const rootElement = document.getElementById('root')
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />{' '}
            <Route path="/:id" element={<Countries />} />{' '}
        </Routes>{' '}
    </BrowserRouter>,
    rootElement
)
