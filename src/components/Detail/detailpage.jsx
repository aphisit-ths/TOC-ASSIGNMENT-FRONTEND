import { motion } from 'framer-motion'
import React from 'react'
import './detailpage.scss'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
function DetailPage() {
    const navigate = useNavigate()
    const location = useLocation()
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
                            src="https://cdn.britannica.com/38/4038-050-BDDBA6AB/Flag-Thailand.jpg"
                            alt="Ghttps://cdn.britannica.com/38/4038-050-BDDBA6AB/Flag-Thailand.jpg"
                        />
                    </div>
                    <h1 className="counrty-name">Thailand</h1>
                    <p className="info">
                        Thailand, country located in the centre of mainland
                        Southeast Asia. Located wholly within the tropics,
                        Thailand encompasses diverse ecosystems, including the
                        hilly forested areas of the northern frontier, the
                        fertile rice fields of the central plains, the broad
                        plateau of the northeast, and the rugged coasts along
                        the narrow southern peninsula. Until the second half of
                        the 20th century, Thailand was primarily an agricultural
                        country, but since the 1960s increasing numbers of
                        people have moved to Bangkok, the capital, and to other
                        cities. Although the greater Bangkok metropolitan area
                        remains the preeminent urban centre in the country,
                        there are other sizable cities, such as Chiang Mai in
                        the north, Nakhon Ratchasima (Khorat), Khon Kaen, and
                        Udon Thani in the northeast, Pattaya in the southeast,
                        and Hat Yai in the far south.
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
