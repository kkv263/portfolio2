import React, { Component } from 'react';
import { Wrapper, FadeInWrapper} from '../styles/Shared.style'
import { Paragraph, Paragraph2, Quote } from '../styles/Contact.style';
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
          <Paragraph2>Shoot me an email at <a href="mailto:kkv263@utexas.edu">kkv263@utexas.edu</a></Paragraph2>
          <br />
          <Quote>
          Inspiring quotes from me to you:
          <br />
          “Be the person you needed when you were younger.”
          <br />
          - Ayesha Siddiqi 
          </Quote>
        </FadeInWrapper>
      </Wrapper>        
    );
  }
}

export default ContactContainer;
