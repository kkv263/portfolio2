import React, { Component } from 'react';
import { Wrapper, FadeInWrapper} from '../styles/Shared.style'
import NavigationBar from '../components/NavigationBar';
class ContactContainer extends Component {
  render() {
    return (
      <Wrapper>
        <NavigationBar showAbout={this.props.showAbout}
                       showHome ={this.props.showHome}
                       showProjects={this.props.showProjects}>
                       </NavigationBar>
        <FadeInWrapper>
          <h1>Hello World!</h1>
        </FadeInWrapper>
      </Wrapper>        
    );
  }
}

export default ContactContainer;
