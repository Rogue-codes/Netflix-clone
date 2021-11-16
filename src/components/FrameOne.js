import React from 'react'
import tv from '../Assets/tv.png'
import '../components/mobile.css'

const FrameOne = () => {
    return (
        <section className='sect'>
            <div className="left">
                <div className="left-content">
                <h1>Enjoy on your TV.</h1>
                <h2>Watch on Smart TVs, Playstation, Xbox, <br /> Chromecast, Apple TV, Blu-ray players, and <br /> more.</h2>
                </div>
            </div>
            <div className="right">
                <div className="img-cont">
                    <img src={tv} alt="" />
                </div>

            </div>
        </section>
    )
}

export default FrameOne
