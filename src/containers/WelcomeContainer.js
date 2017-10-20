import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar'
import { Paragraph, Wrapper, DownArrow, ArrowWrapper } from '../styles/Welcome.style';

class WelcomeContainer extends Component {
  render() {
    return (
      <Wrapper>
        <NavigationBar></NavigationBar>
        <Paragraph time=".5s">Hi there!</Paragraph>
        <Paragraph time="1s">My name is Kevin and you have landed on my portfolio page!</Paragraph>
        <Paragraph time="1.5s">Feel free to look around and enjoy your stay!</Paragraph>
        <ArrowWrapper>
        <DownArrow><p>Explore</p></DownArrow>
        </ArrowWrapper>
      </Wrapper> 
    );
  }
}

export default WelcomeContainer;