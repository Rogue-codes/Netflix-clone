import React from 'react'
import '../components/mobile.css'
import {AiOutlineRight} from 'react-icons/ai'

const Header = () => {
    return (
        <div className='header-container'>
            <nav>
                <li className='netflix'>NETFLIX</li>
                <li className='sign'>Sign In</li>
            </nav>

            <main>
                <h1>Unlimited movies, TV  shows, and more.</h1>
                <h2>Watch anywhere Cancel anytime.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="search">
                    <input type="text" placeholder='Email address'/>
                    <button>Get Started <AiOutlineRight/></button>
                </div>
            </main>
        </div>
    )
}

export default Header
