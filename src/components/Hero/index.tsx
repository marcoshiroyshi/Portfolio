import React from 'react'
import { Button, HeroContainer, IntroOverlay, IntroPosition } from './style'
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
	   	  		<span>Mobile Developer</span> 
	   	  </IntroPosition>
        <Button>More About Me</Button>
        
      </div>
    </HeroContainer>
    </>
  )
}

export default Hero