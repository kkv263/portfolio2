import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
position: relative;
background-color: #AFC2D5;
width: 50%;
height: 100vh;
float: right;
`

class WelcomeContainer extends Component {
  render() {
    return (
      <Wrapper>Hello World!</Wrapper> 
    );
  }
}

export default WelcomeContainer;