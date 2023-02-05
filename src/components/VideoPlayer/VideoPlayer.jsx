import React from 'react'
import ReactPlayer from 'react-player/youtube'
import './VideoPlayer.css'


const VideoPlayer = () => {
    return (
    <div className='Player'>
        <div  className='left-container'>
<ReactPlayer width="100%" className="video" url="https://youtube.com/shorts/zdy7_BZNMtQ?feature=sharehttps://youtube.com/shorts/zdy7_BZNMtQ?feature=share" />
        </div>
        <div className='right-container'>
            <span className='right-text'>AI POWER.</span>
            <span>Our product uses the revolutionary power of AI to perfect every part of your game.</span>
        </div>

    </div>
    )
}


export default VideoPlayer