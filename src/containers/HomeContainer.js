import React, { Component } from 'react';
import { Paragraph, TextWrapper, Wrapper, Brand, BrandWrapper } from '../styles/Home.style';

class HomeContainer extends Component {
  render() {
    return (
      <div>
      <Wrapper>
        <TextWrapper>
        <Paragraph >Contact Me</Paragraph>
        <br />
        <Paragraph>Email: <a href="mailto:kkv263@utexas.edu">kkv263@utexas.edu</a></Paragraph>
        <Paragraph>Phone: <span>512. 698. 3981</span></Paragraph>
        <br />
        <Paragraph><a href="https://www.linkedin.com/in/kkv263/" target="_blank" rel="noopener noreferrer">LinkedIn</a></Paragraph> 
        <Paragraph><a href="https://github.com/kkv263" target="_blank" rel="noopener noreferrer">GitHub</a></Paragraph> 
        <Paragraph><a href={require('../assets/resume.pdf')} target="_blank" rel="noopener noreferrer" download="kevinvu_resume2017.pdf">Resume</a></Paragraph> 
        <Paragraph><a href="https://www.behance.net/sprantmast9371" target="_blank" rel="noopener noreferrer">Behance</a></Paragraph> 
        </TextWrapper>
        <BrandWrapper>
        
        <Brand bottom="30px">K E V I N</Brand>
        <Brand bottom="100px">V U </Brand> 
        </BrandWrapper>
      </Wrapper>
      </div>
    );
  }
}

export default HomeContainer;