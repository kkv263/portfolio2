import React, { Component } from 'react';
import styled from 'styled-components';

const NavItem = styled.h2`
font-size: 1em;
color: #EAF2E3;
font-family: 'Inconsolata', monospace;
transition: color ease .25s;
padding-top:20px;
text-align: right;
width: 20px;
&:hover {
		color: #F25757;
	}
`

const Accordian = styled.div`
transition: border-color ease .25s;
position: absolute;
top:30px;
right: 30px;
width: 40px;
height: 30px;
border: 3px solid #EAF2E3;
border-radius: 10px;
cursor: pointer;
  &:hover {
    border-color: #F25757;
  }
  &:hover > div {
    border-color: #F25757;
  }
`

const AccordLines = styled.div`
transition: border-color ease .25s;
margin-top: 6px;
border-bottom: 1.5px solid #EAF2E3;
width: 70%;
margin-right: auto;
margin-left: auto;
`

class NavigationBar extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

export default NavigationBar;