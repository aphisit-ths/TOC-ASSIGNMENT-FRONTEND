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
                animate="slideToLeft"
                transition={{ ease: 'easeInOut', duration: 1 }}
                variants={motionVariants}
                className="earth3d"
            ></motion.div>

            <motion.h1
                animate="slideToTop"
                transition={{ ease: 'easeInOut', duration: 1.5 }}
                variants={motionVariants}
            >
                Country and world leaders information
            </motion.h1>

            <motion.h2
                animate="slideToTop"
                transition={{ ease: 'easeInOut', duration: 1.7 }}
                variants={motionVariants}
            >
                Do you want to know what's the population in each country? And
                who are the leaders now?
            </motion.h2>

            <motion.a
                animate="slideToBottom"
                transition={{ ease: 'easeInOut', duration: 1.5 }}
                variants={motionVariants}
                href="#map"
                className="button"
            >
                Let's go !
            </motion.a>
        </motion.div>
    )
}

export default Intro
