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
@media all and (max-width: 768px) {
text-align:center;
}

`;

export const Wrapper = styled.div`
position: relative;
background-color: #222823;
width: 45%;
height: 100vh;
float:left;
@media all and (max-width: 768px) {
		width:100%;
		text-align: center;

	}
`;

export const TextWrapper = styled.div`
padding-top:30px;
margin-left: 30px;
display: inline-block;
@media all and (max-width: 768px) {
	margin-left: 0px;
}
`;

export const BrandWrapper = styled.div`
position:absolute;
left:30px;
bottom:30px;
border: 10px solid #E1EFE6;
width: 220px;
height: 120px;
transition: all ease .25s;
&:hover {
		border-color: #EFCB68;
		> div {
			color: #EFCB68;
		}
}
> div {
	transition: all ease .25s;
}
@media all and (max-width: 768px) {
	position: static;
	margin: 0 auto;
	margin-top: 50px;
}
`

export const Brand = styled.div`
font-family: 'Varela Round', sans-serif;
font-size: 3em;
color: #E1EFE6;
text-decoration: none !important;
text-align: right;
padding-right: 10px;
@media all and (max-width: 768px) {
text-align:center;
}
`
