import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar'
import { Paragraph, Wrapper, Button } from '../styles/Welcome.style';

class WelcomeContainer extends Component {
  render() {
    return (
      <Wrapper>
        <NavigationBar></NavigationBar>
        <Paragraph>Hi there!</Paragraph>

        <Paragraph>My name is Kevin and you have landed on my portfolio page!</Paragraph>
        <Paragraph>Feel free to look around and enjoy your stay!</Paragraph>
        <Button>Explore</Button> 
      </Wrapper> 
    );
  }
}

export default WelcomeContainer;