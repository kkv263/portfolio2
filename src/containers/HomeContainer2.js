import React, { Component } from 'react';
import AboutContainer from './AboutContainer';
import WelcomeContainer from './WelcomeContainer';
import ProjectsContainer from './ProjectsContainer';
import ContactContainer from './ContactContainer';
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
    // Switch statement to allow for re-render when navbar is clicked.
    // Pass through showPage as props => callback function 
    switch (this.state.showPage){
      case "about":
        return (<AboutContainer 
        showHome ={() => this.showPage("home")}
        showProjects={() => this.showPage("projects")}
        showContact={() => this.showPage("contact")}
        >
        </AboutContainer>);
    
      case "home":
        return (<WelcomeContainer showAbout={() => this.showPage("about")}
        showProjects={() => this.showPage("projects")}
        showContact={() => this.showPage("contact")}
        >
        </WelcomeContainer>);

      case "projects":
        return (<ProjectsContainer showAbout={() => this.showPage("about")}
        showHome ={() => this.showPage("home")}
        showContact={() => this.showPage("contact")}
        >
        </ProjectsContainer>);

      case "contact":
        return (<ContactContainer showAbout={() => this.showPage("about")}
        showHome ={() => this.showPage("home")}
        showProjects={() => this.showPage("projects")}
        >
      </ContactContainer>); 
        
      default:
        break;
    }
  }
}

export default HomeContainer2;