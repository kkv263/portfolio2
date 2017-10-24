import styled, { keyframes } from 'styled-components';

export const fade = keyframes`
0%   { opacity: 1;}
50%  { opacity: 0;}
100% { opacity: 1;}
`

export const scale = keyframes`
from {transform: scale(1.0);}
to {transform: scale(1.3);}   
`

export const Star = styled.div`
background-color: #E1EFE6;
height: ${props => props.size};
width: ${props => props.size};
border-radius:50%;
position: absolute;
top: ${props => props.x};
left: ${props => props.y};
animation: ${fade} 10s ease-in-out infinite;
animation-delay: ${props => props.delay};
box-shadow: 0px 0px 5px #fff;
`

export const ProjectStar = styled.div`
background-color: #EFCB68;
position: absolute;
top: ${props => props.top};
left:${props => props.left};
height: 50px;
width: 50px;
border-radius:50%;
transition: transform 1s ease;
  &:hover {
    transform: scale(1.3);
  }
`

export const Summary = styled.p`
padding-top: 70px;
font-size: 1.2em;
color: #E1EFE6;
font-family: 'Inconsolata', monospace;
`

export const SummaryWrapper = styled.div`

text-align:center;
height:45vh;
width:90%;
margin-left:5%;
position: relative;
`

export const StarWrapper = styled.div`
height: 45vh;
width: 90%;
margin-left:5%;
margin-top: 10px;
position: relative;
`

export const TextWrapper1 = styled.div`
height:45vh;
float:left;
width:40%;
background-color:#fff;
`

export const TextWrapper2 = styled.div`
height:45vh;
float:right;
width: 60%;
background-color:#fff;
`
