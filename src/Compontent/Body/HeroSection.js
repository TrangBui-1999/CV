import React from 'react';
import '../../App.css';
import './HeroSection.css';
import { Button } from '../Button/Button';

function HeroSection() {
    var number = Math.floor(Math.random()*2)+1;
    var mySrc = '/videos/video-' + number + '.mp4';
    return (
        <div className="hero-container">
        <video src={mySrc} autoPlay loop muted/>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for ?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle = 'btn--outline' buttonSize = 'btn--large'>
                GET STARTED    </Button>
                <Button className='btns' buttonStyle = 'btn--primary' buttonSize = 'btn--large'>
               WATCH TRAILER   <i className='far fa-play-circle'/>  </Button>
            </div>
        </div>
    )
}

export default HeroSection
