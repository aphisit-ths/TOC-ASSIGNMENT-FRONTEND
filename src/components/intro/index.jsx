import React from 'react'
import { motion } from 'framer-motion'
import './intro.scss'
function Intro() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
            exit={{ opacity: 0 }}
            className="intro"
        >
            <div className="earth3d"></div>

            <h1>Country and world leaders information</h1>

            <h2>
                Do you want to know what's the population in each country? And
                who are the leaders now?
            </h2>

            <a href="#map" className="button">
                Let's go !
            </a>
        </motion.div>
    )
}

export default Intro
