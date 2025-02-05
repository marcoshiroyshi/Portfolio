'use client'

import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

.row {
	width: 94%;
	max-width: 1140px;
	margin: 0 auto;
}

.row:before,
.row:after {
	content: "";
	display: table;
}

.row:after {
	clear: both;
}

.row .row {
	width: auto;
	max-width: none;
	margin-left: -20px;
	margin-right: -20px;
}

.col-twelve,
.col-full {
	width: 100%;
}

.col-six,
.col-1-2 {
	width: 50%;
}

@media (max-width: 768px) {
    .col-six {
        
        width: 90%;
    }
} 

h1 {
    color: #FFFFFF;
	font-family: "poppins-medium", sans-serif;
	font-size: 5rem;
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
	    font-size: 2rem;
	    line-height: 1.565;
	    margin-bottom: 0;
	    text-transform: uppercase;
	    letter-spacing: .3rem;
	    text-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
}

span {
    font-size: 1.1rem;
}


/*
 * FONTS
================================================================================ */
@font-face {
    font-family: 'lora-bold';
    src: url('/fonts/lora/lora-bold-webfont.eot');
    src: url('/fonts/lora/lora-bold-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/lora/lora-bold-webfont.woff') format('woff'),
         url('/fonts/lora/lora-bold-webfont.ttf') format('truetype'),
         url('/fonts/lora/lora-bold-webfont.svg#lorabold') format('svg');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'lora-bold-italic';
    src: url('/fonts/lora/lora-bolditalic-webfont.eot');
    src: url('/fonts/lora/lora-bolditalic-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/lora/lora-bolditalic-webfont.woff') format('woff'),
         url('/fonts/lora/lora-bolditalic-webfont.ttf') format('truetype'),
         url('/fonts/lora/lora-bolditalic-webfont.svg#lorabold_italic') format('svg');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'lora-italic';
    src: url('/fonts/lora/lora-italic-webfont.eot');
    src: url('/fonts/lora/lora-italic-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/lora/lora-italic-webfont.woff') format('woff'),
         url('/fonts/lora/lora-italic-webfont.ttf') format('truetype'),
         url('/fonts/lora/lora-italic-webfont.svg#loraitalic') format('svg');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'lora-regular';
    src: url('/fonts/lora/lora-regular-webfont.eot');
    src: url('/fonts/lora/lora-regular-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/lora/lora-regular-webfont.woff') format('woff'),
         url('/fonts/lora/lora-regular-webfont.ttf') format('truetype'),
         url('/fonts/lora/lora-regular-webfont.svg#loraregular') format('svg');
    font-weight: normal;
    font-style: normal;
}


/*
 * Poppins 
================================================================================ */
@font-face {
    font-family: 'poppins-bold';
    src: url('/fonts/poppins/poppins-bold-webfont.eot');
    src: url('/fonts/poppins/poppins-bold-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/poppins/poppins-bold-webfont.woff2') format('woff2'),
         url('/fonts/poppins/poppins-bold-webfont.woff') format('woff'),
         url('/fonts/poppins/poppins-bold-webfont.ttf') format('truetype'),
         url('/fonts/poppins/poppins-bold-webfont.svg#poppinsbold') format('svg');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'poppins-light';
    src: url('/fonts/poppins/poppins-light-webfont.eot');
    src: url('/fonts/poppins/poppins-light-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/poppins/poppins-light-webfont.woff2') format('woff2'),
         url('/fonts/poppins/poppins-light-webfont.woff') format('woff'),
         url('/fonts/poppins/poppins-light-webfont.ttf') format('truetype'),
         url('/fonts/poppins/poppins-light-webfont.svg#poppinslight') format('svg');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'poppins-medium';
    src: url('/fonts/poppins/poppins-medium-webfont.eot');
    src: url('/fonts/poppins/poppins-medium-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/poppins/poppins-medium-webfont.woff2') format('woff2'),
         url('/fonts/poppins/poppins-medium-webfont.woff') format('woff'),
         url('/fonts/poppins/poppins-medium-webfont.ttf') format('truetype'),
         url('/fonts/poppins/poppins-medium-webfont.svg#poppinsmedium') format('svg');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'poppins-regular';
    src: url('/fonts/poppins/poppins-regular-webfont.eot');
    src: url('/fonts/poppins/poppins-regular-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/poppins/poppins-regular-webfont.woff2') format('woff2'),
         url('/fonts/poppins/poppins-regular-webfont.woff') format('woff'),
         url('/fonts/poppins/poppins-regular-webfont.ttf') format('truetype'),
         url('/fonts/poppins/poppins-regular-webfont.svg#poppinsregular') format('svg');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'poppins-semibold';
    src: url('/fonts/poppins/poppins-semibold-webfont.eot');
    src: url('/fonts/poppins/poppins-semibold-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/poppins/poppins-semibold-webfont.woff2') format('woff2'),
         url('/fonts/poppins/poppins-semibold-webfont.woff') format('woff'),
         url('/fonts/poppins/poppins-semibold-webfont.ttf') format('truetype'),
         url('/fonts/poppins/poppins-semibold-webfont.svg#poppinssemibold') format('svg');
    font-weight: normal;
    font-style: normal;
}


`;
 
export default GlobalStyle;