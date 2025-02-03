import React from 'react'
import { HeroContainer, IntroOverlay, IntroPosition } from './style'
import Nav from '../Nav'

function Hero() {
  return (
    <>
    <IntroOverlay/>
    <HeroContainer>      
      <div className='intro-container'>
        <Nav/>
        <h5>HELLO WORLD</h5>
        <h1>I'm Marcos Sanchis.</h1>
        <IntroPosition>
	   	  		<span>Front-end Developer</span>
	   	  		<span>UI/UX Designer</span> 
	   	  </IntroPosition>
        
      </div>
    </HeroContainer>
    </>
  )
}

export default Hero