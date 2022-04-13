import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Countries from './components/countries'
import DetailPage from './components/Detail/detailpage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
const rootElement = document.getElementById('root')
ReactDOM.render(
    <BrowserRouter>
        <AnimatePresence>
            <Routes>
                <Route path="/" element={<App />} />{' '}
                <Route path="/:id" element={<DetailPage />} />{' '}
            </Routes>{' '}
        </AnimatePresence>
    </BrowserRouter>,
    rootElement
)
