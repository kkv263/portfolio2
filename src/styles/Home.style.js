import styled from 'styled-components';

export const Paragraph = styled.p`
font-size: 1.2em;
color: #E1EFE6;
font-family: 'Inconsolata', monospace;
padding-top: ${props => props.size || '5px'};
> a, span {
transition: color ease .25s;
text-decoration: none !important;
font-family: inherit;
color: inherit;
  &:hover {
		color: #EFCB68;
	}
}
`;

export const Wrapper = styled.div`
position: relative;
background-color: #222823;
width: 45%;
height: 100vh;
float:left;
`;

export const TextWrapper = styled.div`
padding-top:30px;
padding-left:30px;
display: inline-block;
vertical-align: middle;
`;

export const Brand = styled.h1`
position:absolute;
bottom:30px;
font-family: 'Varela Round', sans-serif;
font-size: 4em;
color: #E1EFE6;
padding-left:30px;
transition: color ease .25s;
text-decoration: none !important;
  > div {
		transition: background-color ease .25s;
		display:inline-block;
		width: 10px;
		height: 10px;
		background: #EAF2E3;
		-moz-border-radius: 50px;
		-webkit-border-radius: 50px;
		border-radius: 50px;
		
	}
&:hover > div {
		background-color: #EFCB68;
	}
&:hover {
		color: #EFCB68;
}
`
