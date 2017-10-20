import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
background-color: #AFC2D5;
width: 55%;
height: 100vh;
float: right;
`
export const float = keyframes`
	from {-webkit-transform:translate(0, 0px);}
  65% {-webkit-transform:translate(0, -5px);}
  to {-webkit-transform:translate(0, -0px);  
`;

export const fadeIn = keyframes`
from { opacity: 0; }
to   { opacity: 1; }
`
export const Paragraph = styled.p`
padding-right: 15%;
animation: ${fadeIn} ${props => props.time} ease;
font-family: 'Varela Round', sans-serif;
font-size: 2.5em;
color: #EAF2E3;
padding-top: 40px;
`

export const ArrowWrapper = styled.div`
width: 55%;
height:60px;
position: absolute;
bottom 0px;
text-align:center;
`

export const DownArrow = styled.div`
display:inline-block;
border-right: 6px solid #EAF2E3;
border-top: 6px solid #EAF2E3;
border-radius: 6px;
width: 30px;
height: 30px;
margin-right: 15%;
position:relative;
animation: ${float} 2s ease-in-out infinite;
opacity:0.2;
transition: opacity ease .25s;
cursor:pointer;

  > p {
    font-size: 1.1em;
    color: #EAF2E3;
    font-family: 'Inconsolata', monospace;
    top:25px;
    right:5px;
    position:absolute;
  }
  &:hover {
    opacity:0.5;
  }
`