import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar'
import { Paragraph, Wrapper, DownArrow, ArrowWrapper, ArrowText } from '../styles/Welcome.style';
import AboutContainer from './AboutContainer';

class WelcomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAboutPage: false,
    };
    this.showAboutPage = this.showAboutPage.bind(this);
  }
 
 showAboutPage() {
   this.setState({ showAboutPage : true} );
 }

  render() {
    if (this.state.showAboutPage) {
      return (<AboutContainer></AboutContainer>);

    }
    else {
    return (
      <Wrapper>
        <NavigationBar></NavigationBar>
        <Paragraph time=".5s">Hi there!</Paragraph>
        <Paragraph time="1s">My name is Kevin and you have landed on my portfolio page!</Paragraph>
        <Paragraph time="1.5s">Feel free to look around and enjoy your stay!</Paragraph>
        <ArrowWrapper>
          <ArrowText>Explore</ArrowText>
        <DownArrow src={require('../assets/chevron.png')} onClick={this.showAboutPage}>
        </DownArrow>
        </ArrowWrapper>
      </Wrapper> 
    );
  }
  }
}

export default WelcomeContainer;