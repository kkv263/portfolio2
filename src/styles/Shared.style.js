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
background-color: #222823;
width: 55%;
height: 100vh;
float: right;
overflow: ${props => props.of};
-webkit-overflow-scrolling: touch;
@media all and (max-width: 768px) {
		width:100%;
	}
`

export const DownArrow = styled.img`
display:block;
margin: 0 auto;
width:100px;
height:100px;
animation: ${float} 2s ease-in-out infinite;
opacity:0.3;
transition: opacity ease .25s;
cursor:pointer;
transform: rotate(135deg);
  &:hover {
    opacity:1;
  }
`
