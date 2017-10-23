import styled from 'styled-components';

export const Paragraph = styled.p`
font-family: 'Varela Round', sans-serif;
font-size: 2.5em;
color: #E1EFE6;
padding-top: 40px;
text-align:center;
`

export const Paragraph2 = styled.p`
margin-top: 30px;
font-size: 1.2em;
color: #E1EFE6;
font-family: 'Inconsolata', monospace;
text-align:center;
> a, span {
transition: color ease .25s;
text-decoration: none !important;
font-family: inherit;
color: inherit;
  &:hover {
		color: #EFCB68;
	}
}
`

export const Quote = styled.blockquote`
font-size: 1.2em;
color: #E1EFE6;
font-family: 'Inconsolata', monospace;
text-align: center;
padding-top:50px;
`

export const QuoteMarks = styled.span`

`