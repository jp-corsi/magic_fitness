import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/pngegg.png'
import hero_image_back from '../../assets/dame.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header/>

            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Learn </span>
                    <span>
                    From
                    </span>
                    <div>
                    <span>
                    The Pros.
                    </span>
                    </div>
                </div>
                
            <div><span>
                Our program will teach you how to run and dunk a ball...
                </span>
            </div>
            
            </div>
            <div className="hero-buttons">
                <buttons className="btn">Get Started</buttons>
                <buttons className="btn">Learn More</buttons>
            </div>
           </div>
           
            <div className="right-h">
                <button className='btn'>Join Now</button>

                <img src={hero_image} alt="" className="hero-image" /> 

            </div>
        </div>
    )
}

export default Hero