import styled, { keyframes } from 'styled-components';

export const Paragraph = styled.p`
font-size: 1.1em;
color: #EAF2E3;
font-family: 'Inconsolata', monospace;
padding-top:5px;
> a, span {
transition: color ease .25s;
text-decoration: none !important;
font-family: inherit;
color: inherit;
  &:hover {
		color: #F25757;
	}
}
`;

export const Wrapper = styled.div`
position: relative;
background-color: #AFC2D5;
width: 50%;
height: 100vh;
float:left;
`

export const TextWrapper = styled.div`
padding-top:30px;
padding-left:30px;

display: inline-block;
vertical-align: middle;
`

export const rotate360 = keyframes`
	from {-webkit-transform:translate(0, 0px);}
  65% {-webkit-transform:translate(0, -15px);}
  to {-webkit-transform: translate(0, -0px);  
`;

export const Brand = styled.h1`
position:absolute;
bottom:0;
font-family: 'Varela Round', sans-serif;
font-size: 4em;
color: #EAF2E3;
padding-left:30px;
transition: color ease .25s;
text-decoration: none !important;
  > div {
		animation: ${rotate360} 3s ease-in-out infinite;
		display:inline-block;
		width: 10px;
		height: 10px;
		background: #EAF2E3;
		-moz-border-radius: 50px;
		-webkit-border-radius: 50px;
		border-radius: 50px;
		
	}
&:hover {
		color: #F25757;
	}
`
