'use client'

import styled from "styled-components";

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

    
`

export const IntroPosition = styled.div`

    font-family: "lora-regular", serif;
	font-size: 1.7rem;
	line-height: 2.4rem;
	text-transform: uppercase;
	letter-spacing: .2rem;
	color: #FFFFFF;
	text-shadow: 0 0 6px rgba(0, 0, 0, 0.2);

	span {
		display: inline-block;
	}

	span::after {
		content: "|";
		text-align: center;
		display: inline-block;
		padding: 0 8px 0 14px;
		color: rgba(255, 255, 255, 0.3);
	}

	span::before {
		content: "|";
		text-align: center;
		display: inline-block;
		padding: 0 14px 0 8px;
		color: rgba(255, 255, 255, 0.3);
	}
`

export const Button = styled.button `
	color: #FFFFFF !important;
	background-color: transparent;
	border: 3px solid;
	border-color: rgba(255, 255, 255, 0.103);
	height: 4rem !important;
	padding: 1rem 2rem !important;
	margin-top: 1.5rem;
	font-size: 1.3rem;
	text-transform: uppercase;
	letter-spacing: .25rem;
	transition: 0.3s ease ;

	&:hover {
		border-color: #cc005f;
	}
`
