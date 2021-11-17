import React from 'react'
import kids from '../Assets/kids.png'

const FrameFour = () => {
    return (
        <section className='sect-4'>
            <div className="FrameTwo-right">
                <div className="frame-img-cont">
                    <img src={kids} alt="" />
                </div>

            </div>

            <div className="FrameTwo-left">
                <div className="frame-left-content">
                <h1>Create profiles for kids.</h1>
                <h2>Send kids on adventures with their favorite characters in a space made just for them— free with your membership.</h2>
                </div>
            </div>
        </section>
    )
}

export default FrameFour
