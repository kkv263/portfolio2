import React, { Component } from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
font-size: 1.1em;
color: #EAF2E3;
font-family: 'Inconsolata', monospace;
`;

const Wrapper = styled.div`
background-color: #AFC2D5;
width: 50%;
height: 100vh;
`

const TextWrapper = styled.div`
padding-top:30px;
padding-left:30px;
`

class HomeContainer extends Component {
  render() {
    return (
      <Wrapper>
        <TextWrapper>
        <Paragraph>Contact Me</Paragraph>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <Paragraph>Email: kkv263@utexas.edu</Paragraph>
        <Paragraph>Phone: 512. 698. 3981</Paragraph>
        <p>&nbsp;</p>
        <Paragraph>LinkedIn</Paragraph>
        <Paragraph>GitHub</Paragraph>
        <Paragraph>Resume</Paragraph> 
        </TextWrapper>
      </Wrapper>
    );
  }
}

export default HomeContainer;