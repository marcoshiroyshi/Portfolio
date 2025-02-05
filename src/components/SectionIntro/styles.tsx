'use client'

import styled from "styled-components"

export const SectionIntroContainer = styled.div`
    
	padding-top: 8rem;
	padding-bottom: 15rem;
    margin-bottom: 3rem;

    p {
        font-family: "lora-regular", serif;
	    font-size: 1.3rem;
	    line-height: 1.4;
	    color: #888888;
    }

    .intro-info {
        margin: 0 auto;
        max-width: 850px;
        margin-top: 4.2rem;
	   
    }

    .intro-info img {
        height: 9rem;
	    width: 9rem;
	    border-radius: 50%;
	    float: left;
    }

    .intro-info .lead {
	    text-align: left;
	    padding-left: 13rem;    
    }

    .section-title {
        text-align: center;

        h1 {
            text-shadow: none;
            color: black;
            font-size: 2rem;
            font-weight: 600;
        }

        h5 {
            text-shadow: none;
            font-weight: 200;
            color: #FF0077;
        }
    }

    @media only screen and (max-width:1024px) {
	    .intro-info {
	    	margin-right: 0;
	    	margin-left: 0;
	    }

        
    }

    @media only screen and (max-width:768px) {
	.intro-info img {
		height: 7.8rem;
		width: 7.8rem;
       
	}
	
    .intro-info .lead {
		padding-left: 11rem;
	}
    
    p.lead {
		font-size: 1.7rem;
	}
	
    }

    @media only screen and (max-width:600px) {
	.intro-info {
		text-align: center;
		margin-top: 3rem;
	}
	.intro-info img {
		height: 6.6rem;
		width: 6.6rem;
		float: none;
		display: inline-block;
	}
	.intro-info .lead {
		padding-left: 0;
		text-align: center;
	}
}
`

export const AboutContent = styled.div`
    margin: 0 auto;
    margin-top: 3rem;
	gap: 4rem;
    display: flex;
    position: relative;
	text-align: left;
	max-width: 1000px;
	margin-bottom: 3.6rem;

    h3 {
        font-family: "poppins-bold", sans-serif;
	    font-size: 1.4rem;
	    text-transform: uppercase;
	    letter-spacing: .25rem;
    }

    p {
        width: 80%;
        padding: 20px 0;
    }

    

    @media (max-width: 768px) {
        text-align: center;
        flex-direction: column;
        align-items: center;
		max-width: 600px;
       
		p {
			width: 100%;
		}
    }
`

export const InfoList = styled.ul`
    list-style: none;
    margin-left: 0;

    strong {
        font-family: "poppins-bold", sans-serif;
	    color: #313131;
	    text-transform: uppercase;
	    letter-spacing: .2rem;
	    font-size: 1rem;
	    line-height: 3rem;
    }

    span {
        display: block;
	    font-family: "poppins-regular", sans-serif;
	    color: #888888;
	    font-size: 1rem;
	    line-height: 1;
    }
`

export const SkillBars = styled.ul`
    margin-top: 4rem;

`

export const Bars = styled.li`
	height: .6rem;
	background: #a1a1a1;
	width: 100%;
	margin-bottom: 6rem;
    margin-top: 2rem;
	padding: 0;
	position: relative;

	strong {
        position: absolute;
	    left: 0;
	    top: -3rem;
	    font-family: "poppins-bold", sans-serif;
	    color: #313131;
	    text-transform: uppercase;
	    letter-spacing: .2rem;
	    font-size: 1.2rem;
	    line-height: 2.4rem;
    }

	.progress {
		background: #313131;
		position: relative;
		height: 100%;
    }

	.progress span {
		position: absolute;
		right: 0;
		top: -3.6rem;
		display: block;
		font-family: "poppins-regular", sans-serif;
		color: white;
		font-size: 1rem;
		line-height: 1;
		background: #313131;
		padding: .6rem .6rem;
		border-radius: 3px;
	}

	.progress span::after {
	position: absolute;
	left: 50%;
	bottom: -5px;
	margin-left: -5px;
	border-right: 5px solid transparent;
	border-left: 5px solid transparent;
	border-top: 5px solid #313131;
	content: "";
}

.percent5   { width: 5%; }
.percent10  { width: 10%; }
.percent15  { width: 15%; }
.percent20  { width: 20%; }
.percent25  { width: 25%; }
.percent30  { width: 30%; }
.percent35  { width: 35%; }
.percent40  { width: 40%; }
.percent45  { width: 45%; }
.percent50  { width: 50%; }
.percent55  { width: 55%; }
.percent60  { width: 60%; }
.percent65  { width: 65%; }
.percent70  { width: 70%; }
.percent75  { width: 75%; }
.percent80  { width: 80%; }
.percent85  { width: 85%; }
.percent90  { width: 90%; }
.percent95  { width: 95%; }
.percent100 { width: 100%; }


	@media (max-width: 768px) {

	}

`