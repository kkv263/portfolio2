import styled from 'styled-components';


export const Wrapper = styled.div`
background-color: #AFC2D5;
width: 50%;
height: 100vh;
float: right;
`

export const Paragraph = styled.p`
font-family: 'Varela Round', sans-serif;
font-size: 2.5em;
color: #EAF2E3;
padding-bottom: 40px;
`

export const Button = styled.div`
  font-size: 1.1em;
  color: #EAF2E3;
  font-family: 'Inconsolata', monospace;
	border-radius: 3px;
  border: 2px solid #EAF2E3;
  padding-top: 15px;
  color: #EAF2E3;
  width: 20%;
  height: 5%;
  text-align:center;
  transition: all ease .25s;
  &:hover {
		color: #F25757;
    border-color: #F25757;
	}
`