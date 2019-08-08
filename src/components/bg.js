import React from 'react';
import '../App.css';
import Video from '../media/bg-video.mp4';

const BG = () => {
    return (<div className="bg">
        <video autoPlay muted loop className="video">
            <source src={Video} type="video/mp4" />
        </video>
    </div>)
}

export default BG;