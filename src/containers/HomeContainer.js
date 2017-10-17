import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;

class HomeContainer extends Component {
  render() {
    return (
      <Title>Hello World!</Title>
    );
  }
}

export default HomeContainer;