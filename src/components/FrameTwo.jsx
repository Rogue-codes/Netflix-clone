import React from 'react'
import mobile from '../Assets/mobile-0819.jpg'

const FrameTwo = () => {
    return (
        <section className='sect-2'>
            <div className="FrameTwo-right">
                <div className="frame-img-cont">
                    <img src={mobile} alt="" />
                </div>

            </div>

            <div className="FrameTwo-left">
                <div className="frame-left-content">
                <h1>Download your shows <br /> to watch offline.</h1>
                <h2>Save your favorites easily and always have something to watch.</h2>
                </div>
            </div>
        </section>
    )
}

export default FrameTwo
