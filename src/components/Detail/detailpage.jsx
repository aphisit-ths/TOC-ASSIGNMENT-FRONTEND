import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import LoadingScrean from '../loading/loading'
import './detailpage.scss'
import axios from 'axios'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
function DetailPage() {
    const [country, setCountry] = useState()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const location = useLocation()
    const { id } = useParams()
    useEffect(() => {
        async function getAllCountry() {
            try {
                const res = await axios.get(
                    'https://countries-api-service.herokuapp.com/' + id
                )
                if (res && res.data) {
                    setLoading(true)
                    setTimeout(() => {
                        setCountry(res.data[0])
                        setLoading(false)
                    }, 5000)
                }
            } catch (error) {
                setLoading(true)
            }
        }
        getAllCountry()
    }, [])
    const unKnowFlag =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Flag.svg/600px-Flag.svg.png'
    if (loading)
        return (
            <div className="DetailPage">
                <LoadingScrean />
            </div>
        )
    return (
        <motion.div className="DetailPage">
            <div className="row">
                <motion.div
                    animate={{ opacity: [0, 1] }}
                    transition={{ ease: 'easeInOut', duration: 1 }}
                    exit={{ opacity: 0 }}
                    className="column"
                >
                    <motion.div
                        animate={{ opacity: [0, 1], y: [-60, 1] }}
                        transition={{ ease: 'easeInOut', duration: 1 }}
                        exit={{ opacity: 0 }}
                        className="img-flag"
                    >
                        <motion.img
                            className="img-flag"
                            src={country ? country.flagUrl : unKnowFlag}
                            alt="Girl in a jacket"
                        />
                    </motion.div>
                    <motion.h1
                        animate={{ opacity: [0, 1], x: [-60, 1] }}
                        transition={{ ease: 'easeInOut', duration: 1.3 }}
                        exit={{ opacity: 0 }}
                        className="counrty-name"
                    >
                        {country ? country.name : id}{' '}
                        <span>: {country ? country.capital : 'NA'}</span>
                    </motion.h1>
                    <motion.p
                        animate={{ opacity: [0, 1], x: [-60, 1] }}
                        transition={{ ease: 'easeInOut', duration: 1.7 }}
                        exit={{ opacity: 0 }}
                        className="president-name"
                    >
                        {country ? country.headOfGoverment : 'NaN'}{' '}
                    </motion.p>
                    <motion.p
                        animate={{ opacity: [0, 1], y: [60, 1] }}
                        transition={{ ease: 'easeInOut', duration: 1.7 }}
                        exit={{ opacity: 0 }}
                        className="info"
                    >
                        {country ? country.info : 'NaN'}{' '}
                    </motion.p>
                    <motion.span
                        animate={{ opacity: [0, 1], y: [60, 1] }}
                        transition={{ ease: 'easeInOut', duration: 1.7 }}
                        exit={{ opacity: 0 }}
                        className="readmore"
                        onClick={() => {
                            navigate(`${'/readmore/' + id}`)
                        }}
                    >
                        readmore...{' '}
                    </motion.span>{' '}
                    <motion.div
                        animate={{ opacity: [0, 1], y: [60, 1] }}
                        transition={{ ease: 'easeInOut', duration: 1.7 }}
                        exit={{ opacity: 0 }}
                        onClick={() => navigate('/#map' + location.search)}
                        className="back-button"
                    >
                        Go back
                    </motion.div>
                </motion.div>
                <motion.div
                    animate={{ opacity: [0, 1], y: [60, 1] }}
                    transition={{ ease: 'easeInOut', duration: 1.7 }}
                    exit={{ opacity: 0 }}
                    className="column-map"
                >
                    <img
                        src={country ? country.mapUrl : unKnowFlag}
                        alt="Girl in a jacket"
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default DetailPage
