import React, { Component } from 'react';
import { Paragraph, TextWrapper, Wrapper, Brand } from '../styles/Home.style';

class HomeContainer extends Component {
  render() {
    return (
      <div>
      <Wrapper>
        <TextWrapper>
        <Paragraph >Contact Me</Paragraph>
        <p>&nbsp;</p>
        <Paragraph>Email: <a href="mailto:kkv263@utexas.edu">kkv263@utexas.edu</a></Paragraph>
        <Paragraph>Phone: <span>512. 698. 3981</span></Paragraph>
        <p>&nbsp;</p>
        <Paragraph><a href="https://www.linkedin.com/in/kkv263/" target="_blank" rel="noopener noreferrer">LinkedIn</a></Paragraph> 
        <Paragraph><a href="https://github.com/kkv263" target="_blank" rel="noopener noreferrer">GitHub</a></Paragraph> 
        <Paragraph><a href="#resume" target="_blank" rel="noopener noreferrer">Resume</a></Paragraph> 
        <Paragraph size="315px"><span>I am a</span></Paragraph>
        <Paragraph ><span>Aspiring Developer</span></Paragraph>
        </TextWrapper>
          <Brand>K E V I N <div></div> V U</Brand> 
      </Wrapper>
      </div>
    );
  }
}

export default HomeContainer;