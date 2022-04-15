import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
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
                    setCountry(res.data[0])
                    setLoading(false)
                    console.log(res.data[0])
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
                <p>loading</p>
            </div>
        )
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
            exit={{ opacity: 0 }}
            className="DetailPage"
        >
            <div className="row">
                <motion.div className="column">
                    <div className="img-flag">
                        <img
                            src={country ? country.flagUrl : unKnowFlag}
                            alt="Girl in a jacket"
                        />
                    </div>
                    <h1 className="counrty-name">
                        {country ? country.name : id}{' '}
                        <span>: {country ? country.capital : 'NA'}</span>
                    </h1>
                    <p className="president-name">
                        {country ? country.headOfGoverment : 'NaN'}{' '}
                    </p>

                    <p className="info">
                        {country ? country.info : 'NaN'}{' '}
                        <span
                            className="readmore"
                            onClick={() => {
                                navigate(`${'/readmore/' + id}`)
                            }}
                        >
                            readmore...{' '}
                        </span>{' '}
                    </p>

                    <div
                        onClick={() => navigate('/#map' + location.search)}
                        className="back-button"
                    >
                        Go back
                    </div>
                </motion.div>
                <div className="column-map">
                    <img
                        src={country ? country.mapUrl : unKnowFlag}
                        alt="Girl in a jacket"
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default DetailPage
