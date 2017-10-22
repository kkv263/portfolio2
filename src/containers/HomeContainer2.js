import React, { Component } from 'react';
import AboutContainer from './AboutContainer';
import WelcomeContainer from './WelcomeContainer';

class HomeContainer2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPage: "home",
    };
    this.showPage= this.showPage.bind(this);
  }
 
 showPage(value){
   this.setState({ showPage : value} );
   console.log(value);
 }

  render() {
    switch (this.state.showPage){
      case "about":
        return (<AboutContainer showAbout={() => this.showPage("about")}
        showHome ={() => this.showPage("home")}>
        </AboutContainer>);
    
      case "home":
        return (<WelcomeContainer showAbout={() => this.showPage("about")}
        showHome ={() => this.showPage("home")}>
        </WelcomeContainer>);

      default:
        break;
    }
  }
}

export default HomeContainer2;