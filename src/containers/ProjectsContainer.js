import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar';
import { Wrapper, FadeInWrapper} from '../styles/Shared.style'

class ProjectsContainer extends Component {
  render() {
    return (
      <Wrapper>
        <NavigationBar showAbout={this.props.showAbout}
                       showHome ={this.props.showHome}
                       showContact={this.props.showContact}>
                       </NavigationBar>
        <FadeInWrapper>
          hi
        </FadeInWrapper>
      </Wrapper>

    );
  }
}

export default ProjectsContainer;