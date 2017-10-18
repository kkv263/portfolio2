import styled from 'styled-components';

export const Paragraph = styled.p`
font-size: 1.1em;
color: #EAF2E3;
font-family: 'Inconsolata', monospace;
> a, span {
transition: color ease .25s;
font-family: 'Inconsolata', monospace;
text-decoration: none !important;
color: inherit;
  &:hover {
		color: #F25757;
	}
}
`;

export const Wrapper = styled.div`
background-color: #AFC2D5;
width: 50%;
height: 100vh;
`

export const TextWrapper = styled.div`
padding-top:30px;
padding-left:30px;

display: inline-block;
vertical-align: middle;
`