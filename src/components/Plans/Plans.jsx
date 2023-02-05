import React from 'react'
import {plansData} from '../../data/plansData'
import './Plans.css'
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
    return (
        <div className="plans-container">
            <div className="programs-header">
                <span>READY</span>
                <span>TO</span>
                <span>JOIN?</span>
            </div>

            <div className="plans">
                {plansData.map((plan, i)=>(
                    <div className='plan' key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span> ${plan.price}</span>

                        
                        <div>
                            <span>See more benefits</span>
                        </div>
                        <button className="btn">Join Now</button>
                        </div>
                ))}
            </div>
        </div>
    );
};
export default Plans