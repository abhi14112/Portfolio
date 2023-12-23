import React from 'react'
import './hero.css';
const Hero = () => {
  return (
    <div className='hero-section'>
        <div className='intro'>
            Hi, I'm a <span className='profession'>Coder.</span> 
        </div>
        <div className='description'>
            Full-time student with passion for development.
        </div>
        <div className='buttons'>
            <a className='first-btn'>About me</a>
            <a className='second-btn'>Projects</a>
        </div>
    </div>
  )
}
export default Hero