import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
from { opacity: 0; }
to   { opacity: 1; }
`

export const Wrapper = styled.div`
background-color: #AFC2D5;
width: 55%;
height: 100vh;
float: right;
overflow:auto;
`
export const Image = styled.img`
animation: ${fadeIn} 1s ease;
margin-top: 30px;
margin-bottom: 30px;
min-width: 80%;
height 50vh;
margin-left: 10%;
`

export const Paragraph = styled.p`
animation: ${fadeIn} 1s ease;
margin-bottom: 30px;
font-size: 1.2em;
color: #EAF2E3;
font-family: 'Inconsolata', monospace;
`