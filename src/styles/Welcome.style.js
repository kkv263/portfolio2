import styled, { keyframes } from 'styled-components';

export const float = keyframes`
	from {transform:translate(0, 0px);}
  65% {transform:translate(0, -5px);}
  to {transform:translate(0, -0px);  
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

export const DownArrow = styled.img`
display:inline-block;
width:50px;
height:50px;
margin-right: 15%;
animation: ${float} 2s ease-in-out infinite;
opacity:0.3;
transition: opacity ease .25s;
cursor:pointer;
transform: rotate(135deg);

  &:hover {
    opacity:1;
  }
`

export const ArrowText = styled.p`
font-size: 1.1em;
color: #E1EFE6;
opacity:0.3;
font-family: 'Inconsolata', monospace;
bottom:55px;
right:49.5%;
position:absolute;
`