import React, { Component } from 'react';
import { Paragraph, Wrapper, DownArrow, ArrowWrapper, ArrowText } from '../styles/Welcome.style';
import NavigationBar from '../components/NavigationBar';
class WelcomeContainer extends Component {
  render() {
    return (
      <Wrapper>
          <NavigationBar showAbout={this.props.showAbout}
                         showHome ={this.props.showHome}>
          </NavigationBar>
          <Paragraph time=".5s">Hi there!</Paragraph>
          <Paragraph time="1s">My name is Kevin and you have landed on my portfolio page!</Paragraph>
          <Paragraph time="1.5s">Feel free to look around and enjoy your stay!</Paragraph>
          <ArrowWrapper>
            <ArrowText>Explore</ArrowText>
          <DownArrow src={require('../assets/chevron.png')} onClick={this.props.showAbout}>
          </DownArrow>
          </ArrowWrapper>
      </Wrapper> 
    );
  } 
}

export default WelcomeContainer;