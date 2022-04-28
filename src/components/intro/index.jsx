import React from 'react'
import { motion } from 'framer-motion'
import './intro.scss'
import { motionVariants } from '../../utils/motionvariants'
function Intro() {
    return (
        <motion.div
            transition={{ ease: 'easeInOut', duration: 1 }}
            className="intro"
        >
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ x: 600 }}
                transition={{ ease: 'easeInOut', duration: 1 }}
                className="earth3d"
            ></motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ x: 600 }}
                transition={{ ease: 'easeInOut', duration: 1.5 }}
            >
                Country and world leaders information
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ x: 600 }}
                transition={{ ease: 'easeInOut', duration: 1.7 }}
            >
                Do you want to know what's the population in each country? And
                who are the leaders now?
            </motion.h2>

            <motion.a
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ x: 600 }}
                transition={{ ease: 'easeInOut', duration: 1.5 }}
                href="#map"
                className="button"
            >
                Let's go !
            </motion.a>
        </motion.div>
    )
}

export default Intro
