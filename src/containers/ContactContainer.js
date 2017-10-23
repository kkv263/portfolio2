import React, { Component } from 'react';
import { Wrapper, FadeInWrapper} from '../styles/Shared.style'
import { Paragraph, Paragraph2 } from '../styles/Contact.style';
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
          <Paragraph>Have a question?</Paragraph>
          <Paragraph2>Shoot me an email at: kkv263@utexas.edu</Paragraph2>
        </FadeInWrapper>
      </Wrapper>        
    );
  }
}

export default ContactContainer;