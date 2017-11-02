import styled, { keyframes } from 'styled-components';

export const fade = keyframes`
0%   { opacity: 1;}
50%  { opacity: 0;}
100% { opacity: 1;}
`

export const fadeIn = keyframes`
0%   { opacity: 0;}
100%  { opacity: 1;}
`

export const FadeInWrapper2 = styled.div`
animation: ${fadeIn} 1s ease;
`
export const FadeInWrapper3 = styled.div`
animation: ${fadeIn} 1s ease;
`
export const FadeInWrapper4 = styled.div`
animation: ${fadeIn} 1s ease;
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
animation: ${fade} 5s ease-in-out infinite;
animation-delay: ${props => props.delay};
box-shadow: 0px 0px 5px #fff;
`

export const ProjectStar = styled.img`
position: absolute;
top: ${props => props.top};
left:${props => props.left};
height: ${props => props.h};
width: ${props => props.w};
transition: all 1s ease;
opacity:  ${props => props.full ? '1' : '0.3'};
cursor:pointer;
  &:hover {
    transform: scale(1.1);
    opacity:1
  }
`

export const Summary = styled.p`
text-align:center;
margin-top: 5%;
font-size: 1.1em;
color: #E1EFE6;
font-family: 'Inconsolata', monospace;
`

export const SummaryWrapper = styled.div`
border-color: #E1EFE6;
height:40vh;
margin-right:5%;
margin-left:5%;
width:90%;
margin-top: 2.5%;
position: relative;
&:before{
  display:block;
  content:"";
  width:100%;
  height:1px;
  opacity:0.8;
  background:#E1EFE6;
  background: -webkit-gradient(radial, 50% 50%, 0, 50% 50%, 350, from(#E1EFE6), to(#222823));
  }
`

export const StarWrapper = styled.div`
height: 40vh;
width: 90%;
margin-right:10%;
margin-top: 10px;
position: relative;

`

export const TextWrapper1 = styled.div`
padding-left:5%;
padding-top: 2.5%;
height:35vh;
float:left;
width:30%;
position:relative;
`

export const TextWrapper2 = styled.div`
padding-right:5%;
display:table;
padding-top: 2.5%;
height:35vh;
float:right;
width: 50%;
`
export const ProjectText = styled.p`
vertical-align: middle;
display:table-cell;
font-size: 1em;
color: #E1EFE6;
font-family: 'Inconsolata', monospace;
@media all and (max-width: 414px) {
font-size: .75em;
}
`

export const ResourceText = styled.p`
font-size: 1em;
color: #E1EFE6;
font-family: 'Inconsolata', monospace;
position: absolute;
bottom: 0%;
z-index:1;
@media all and (max-width: 414px) {
font-size: .75em;
}

> a {

  transition: color ease .25s;
  text-decoration: none !important;
  font-family: inherit;
  color: inherit;
  @media all and (max-width: 414px) {
  font-size: .75em;
  }
    &:hover {
      color: #EFCB68;
    }
  }
}
`