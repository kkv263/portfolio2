import React, { Component } from 'react';
import styled from 'styled-components';

const NavItem = styled.h1`
font-size: 1.25em;
color: #EAF2E3;
font-family: 'Inconsolata', monospace;
`

const Wrapper = styled.div`
padding-top: 30px;
padding-bottom: 30px;
display: flex;
justify-content: space-around;
width:100%;
`

class NavigationBar extends Component {
  render() {
    return (
      <div>
      <Wrapper>
        <NavItem>About</NavItem>
        <NavItem>Projects</NavItem> 
        <NavItem>Placeholder</NavItem> 
        <NavItem>Placeholder</NavItem> 
      </Wrapper>

      </div>
    );
  }
}

export default NavigationBar;