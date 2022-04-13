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
            <div>
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
                            alt={id}
                        />
                    </div>
                    <h1 className="counrty-name">
                        {country ? country.name : id}{' '}
                        <span>
                            (capital : {country ? country.capital : 'NA'})
                        </span>
                    </h1>

                    <p className="info">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur rhoncus ornare lectus, ac condimentum magna
                        finibus nec. Nunc varius blandit nunc at congue. Donec
                        aliquam pharetra sapien ac placerat. Aenean sodales
                        vehicula lectus in vehicula. Pellentesque leo ex,
                        condimentum ut convallis ac, blandit et ligula. Proin
                        non risus fringilla, posuere nulla vitae, pretium mi.
                        Morbi nibh risus, volutpat ut enim a, mattis facilisis
                        ex. Nulla rhoncus ex sed tortor auctor, ut viverra neque
                        molestie. Integer sit amet sapien ac lorem commodo
                        finibus. Nunc venenatis lacus leo, vitae ultrices augue
                        lobortis quis.
                    </p>
                    <div
                        onClick={() => {
                            navigate('/' + location.search)
                        }}
                        className="back-button"
                    >
                        Go back
                    </div>
                </motion.div>
                <div className="column">
                    <div className="img-map">
                        <img
                            src="https://cdn.britannica.com/47/4047-050-71A61B0E/Thailand-map-boundaries-cities-locator.jpg"
                            alt="Girl in a jacket"
                            width="400"
                            height="500"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default DetailPage
