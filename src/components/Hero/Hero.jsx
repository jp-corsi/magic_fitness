import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/image.png'
import hero_image_back from '../../assets/dame.png'
import {motion} from 'framer-motion'

const Hero = () => {
    const transition = {type: 'spring', duration: 3}

    return (

        <div className="hero">
            <div className="blur hero-blur"></div>
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
                Our program will give you the skills and confidence to dominate on the court.
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
                <motion.div 
                initial={{right:"1rem"}}
                whileInView={{left:"-14rem"}}
                transition={{...transition}}
                className="hero-image">
                <img src={hero_image} alt="" className="hero-image" /> 
                </motion.div>

            </div>
        </div>
    )
}

export default Hero