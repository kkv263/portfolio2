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
cursor:pointer;

&:hover {
		color: #F25757;
	}
`

const NavWrapper = styled.div`
margin-right: 10%;
display:flex;
justify-content: space-around;
`

class NavigationBar extends Component {
  render() {
    return (
      <NavWrapper>
        <NavItem onClick={this.props.showHome}>Home</NavItem>
        <NavItem onClick={this.props.showAbout}>About</NavItem>
        <NavItem >Projects</NavItem>
        <NavItem>Contact</NavItem>
      </NavWrapper>
    );
  }
}

export default NavigationBar;