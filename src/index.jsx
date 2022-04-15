import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Countries from './components/countries'
import DetailPage from './components/Detail/detailpage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import MoreDetail from './components/Detail/moredetail'
const rootElement = document.getElementById('root')
ReactDOM.render(
    <BrowserRouter>
        <AnimatePresence>
            <Routes>
                <Route path="/" element={<App />} />{' '}
                <Route path="/:id" element={<DetailPage />} />{' '}
                <Route path="/readmore/:id" element={<MoreDetail />} />{' '}
            </Routes>{' '}
        </AnimatePresence>
    </BrowserRouter>,
    rootElement
)
