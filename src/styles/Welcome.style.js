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
padding-left:30px;
padding-right: 15%;
animation: ${fadeIn} ${props => props.time} ease;
font-family: 'Varela Round', sans-serif;
font-size: 2.5em;
color: #EAF2E3;
padding-top: 40px;
`
