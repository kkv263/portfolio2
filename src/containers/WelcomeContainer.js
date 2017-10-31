import React, { Component } from 'react';
import { Paragraph, ArrowText } from '../styles/Welcome.style';
import { DownArrow, ArrowWrapper } from '../styles/Shared.style'
import NavigationBar from '../components/NavigationBar';
class WelcomeContainer extends Component {
  render() {
    return (
      <div>
          <NavigationBar showAbout={this.props.showAbout}
                         showProjects={this.props.showProjects}
                         showContact={this.props.showContact}>
          </NavigationBar>
          <Paragraph time=".5s">Hi there!</Paragraph>
          <Paragraph time="1s">My name is Kevin and you have landed on my portfolio page!</Paragraph>
          <Paragraph time="1.5s">Feel free to look around and enjoy your stay!</Paragraph>
          <ArrowWrapper pos="35%">
            <ArrowText>Explore</ArrowText>
          <DownArrow src={require('../assets/chevron.svg')} onClick={this.props.showAbout}>
          </DownArrow>
          </ArrowWrapper>
      </div>
    );
  } 
}

export default WelcomeContainer;