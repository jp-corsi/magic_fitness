import React from 'react'
import {plansData} from '../../data/plansData'
import './Plans.css'
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
    return (
        <div className="plans-container">
            <div className="programs-header">
                <span>READY TO JOIN?</span>
               
            </div>

            <div className="plans">
                {plansData.map((plan, i)=>(
                    <div className='plan' key={i.toString()}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span> ${plan.price}</span>
                        <div>
                            <span>Learn More</span>
                        </div>
                        <button className="btn">Join Now</button>
                        </div>
                ))}
            </div>
        </div>
    );
};
export default Plans
