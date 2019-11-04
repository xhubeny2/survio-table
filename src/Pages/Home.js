import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imgs/logo_survio.png';

const Home = () => (
    <div className='homepage'>
        <div className='header-stripe'>
            <div className='headerText'>
                powered by <a href="https://www.survio.com/"><img src={logo} alt="Survio logo" className='survioLogo' /></a>
            </div>
        </div>
        <div className='colored-stripe'>
            <div className='text-home'>
                <div className='regular-text'>avesome</div>
                <div className='bold-text'>TABLE</div>
            </div>
        </div>
        <div className='footer-stripe'>
            <Link to="/table">
                <button type="button" className='homeButton'>
                    LET'S START!
                </button>
            </Link>
            <div style={{position: 'absolute', bottom: 0, margin: 2}}>MH 2019</div>
        </div>
    </div>
)

export default Home;