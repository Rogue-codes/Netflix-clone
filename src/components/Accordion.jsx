import React, { useState } from 'react'
import { Data } from './data'
import {FaMinus} from 'react-icons/fa'
import {BsPlusLg} from 'react-icons/bs'
import {AiOutlineRight} from 'react-icons/ai'


const Accordion = () => {
    const [clicked, setClicked] = useState(false)
    const toggle = index => {
        if(clicked === index){
            return setClicked(null)
        }
        setClicked(index)
    }
    return (
        <div className='accordion-section'>
            <div className="faq">
                <h1>Frequently Asked Questions</h1>
            </div>
            {Data.map((item,index)=>(<div className="accordion-container">
                <div className="head" onClick={()=>toggle(index)} key={index}><h1>{item.question}</h1><span>{clicked === index ? <FaMinus/> : <BsPlusLg/>}</span></div>
                {clicked === index ? <div className="foot"><p>{item.answer}</p></div>:null}
            </div>))}

            <div className="ready">
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
            </div>
            <div className="search-2">
                    <input type="text" placeholder='Email address'/>
                    <button>Get Started <AiOutlineRight/></button>
            </div>
            
        </div>
    )
}

export default Accordion
