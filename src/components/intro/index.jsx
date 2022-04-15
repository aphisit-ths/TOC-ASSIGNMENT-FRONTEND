import React from 'react'
import { motion } from 'framer-motion'
import './intro.scss'
function Intro() {
    return (
        <motion.div
            transition={{ ease: 'easeInOut', duration: 1 }}
            className="intro"
        >
            <motion.div
                animate={{ opacity: [0, 1], x: [-60, 1] }}
                transition={{ ease: 'easeInOut', duration: 1 }}
                exit={{ opacity: 0 }}
                className="earth3d"
            ></motion.div>

            <motion.h1
                animate={{ opacity: [0, 1], x: [30, 1] }}
                transition={{ ease: 'easeInOut', duration: 1.5 }}
                exit={{ opacity: 0 }}
            >
                Country and world leaders information
            </motion.h1>

            <motion.h2
                animate={{ opacity: [0, 1], x: [-100, 1] }}
                transition={{ ease: 'easeInOut', duration: 1.7 }}
                exit={{ opacity: 0 }}
            >
                Do you want to know what's the population in each country? And
                who are the leaders now?
            </motion.h2>

            <motion.a
                animate={{ opacity: [0, 1], y: [20, 1] }}
                transition={{ ease: 'easeInOut', duration: 1.5 }}
                exit={{ opacity: 0 }}
                href="#map"
                className="button"
            >
                Let's go !
            </motion.a>
        </motion.div>
    )
}

export default Intro
