import React from 'react'
import './Programs.css'
import { programsData } from '../../data/programsData'

const Programs = () => {
    return (
        <div className='Programs' id="programs">
            <div className="programs-header">
            <span>perfect</span>
            <span>your</span>
            <span>game</span>
            </div>

            <div className="program-categories">
                {programsData.map((program)=>(
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Programs