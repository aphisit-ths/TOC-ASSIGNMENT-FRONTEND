import React from 'react'
import './footer.scss'
function Footer() {
    return (
        <div className="root-footer">
            <h1>Country and leader's information</h1>
            <p>Assignment Theory of Computation</p>
            <div className="members">
                <p> 61015004 KRITSANA WIPANKHET</p>
                <p> 62015029 CHAIYA RATTANAPATIMAKUM</p>
                <p> 63015117 PACHARAPOL PROMPANG</p>
                <p> 63015166 SARAYUT AREE</p>
                <p> 63015183 SARIN HONGTHONG</p>
                <p> 63015208 APHISIT TUBSEANG</p>
            </div>
            <h2>Assosiate Link</h2>
            <div className="accosiate-link">
                {' '}
                <a
                    className="members"
                    href="https://github.com/aphisit-ths/TOC-ASSIGNMENT-FRONTEND"
                >
                    FRONTEND
                </a>
                <a
                    className="members"
                    href="https://github.com/aphisit-ths/COUNTIES-API-SERVICE"
                >
                    API SERVICE
                </a>
                <a
                    className="members"
                    href="https://github.com/Sarayut-Aree/Theory-of-Computation"
                >
                    REGULAR EXPRESSION PLAYGROUND
                </a>
            </div>
        </div>
    )
}

export default Footer
