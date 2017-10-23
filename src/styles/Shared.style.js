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

export const FadeInWrapper = styled.div`
animation: ${fadeIn} 1s ease;
`

export const Wrapper = styled.div`
background-color: #AFC2D5;
width: 55%;
height: 100vh;
float: right;
overflow:auto;
`

export const ArrowWrapper = styled.div`
width: 100%;
height:60px;
padding-bottom:${props=>props.pos};
position:relative;
`

export const DownArrow = styled.img`
position:absolute;
right:50%;
bottom:0px;
width:50px;
height:50px;
animation: ${float} 2s ease-in-out infinite;
opacity:0.3;
transition: opacity ease .25s;
cursor:pointer;
transform: rotate(135deg);

  &:hover {
    opacity:1;
  }
`