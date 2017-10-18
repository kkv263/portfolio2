import React, { Component } from 'react';
import { Paragraph, TextWrapper, Wrapper } from '../styles/Home.style';

class HomeContainer extends Component {
  render() {
    return (
      <Wrapper>
        <TextWrapper>
        <Paragraph >Contact Me</Paragraph>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <Paragraph>Email: <a href="mailto:kkv263@utexas.edu">kkv263@utexas.edu</a></Paragraph>
        <Paragraph>Phone: <span>512. 698. 3981</span></Paragraph>
        <p>&nbsp;</p>
        <Paragraph><a href="https://www.linkedin.com/in/kkv263/" target="_blank">LinkedIn</a></Paragraph> 
        <Paragraph><a href="https://github.com/kkv263" target="_blank">GitHub</a></Paragraph> 
        <Paragraph><a href="#" target="_blank">Resume</a></Paragraph> 
        </TextWrapper>
      </Wrapper>
    );
  }
}

export default HomeContainer;