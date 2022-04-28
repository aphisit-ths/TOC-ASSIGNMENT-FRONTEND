import './loading.scss'
import * as loadingData from './loading-ele/loading.json'
import React from 'react'
import Lottie from 'react-lottie'

function LoadingScrean() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingData.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }
    return (
        <div className="loading-root">
            <Lottie
                className="loading-element"
                options={defaultOptions}
            ></Lottie>
        </div>
    )
}

export default LoadingScrean
