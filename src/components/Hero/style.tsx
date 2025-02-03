'use client'

import styled from "styled-components"

export const IntroOverlay = styled.div`
    position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #111111;
	opacity: .75;
`

export const HeroContainer = styled.div`
    background: #151515 url("/imgs/intro-bg.jpg") no-repeat center bottom;
    -webkit-background-size: cover;
	-moz-background-size: cover;
	background-size: cover;
	background-attachment: fixed;
    height: 100vh;
       

    .intro-container {
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .intro-overlay {
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    background: #111111;
	    opacity: .75;
        
    }

    h1 {
        color: #FFFFFF;
	    font-family: "poppins-medium", sans-serif;
	    font-size: 7rem;
	    line-height: 1.071;
	    max-width: 1200px;
	    margin-top: 0;
	    margin-bottom: .6rem;
	    margin-left: auto;
	    margin-right: auto;
	    text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    }

    h5 {
        color: #cc005f;
	    font-family: "poppins-bold", sans-serif;
	    font-size: 2.3rem;
	    line-height: 1.565;
	    margin-bottom: 0;
	    text-transform: uppercase;
	    letter-spacing: .3rem;
	    text-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
    }
`

export const IntroPosition = styled.div`
    
`