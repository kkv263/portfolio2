import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar';
import { Wrapper, FadeInWrapper} from '../styles/Shared.style';
import { Star, StarWrapper, ProjectStar, SummaryWrapper, 
         Summary, TextWrapper1, TextWrapper2 } from '../styles/Projects.style';

class ProjectsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      showProject: "start"
    };
    this.showProject = this.showProject.bind(this);
  }  

  showProject(value){
    this.setState({ showProject : value} );
    console.log(value);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextState.showProject !== this.state.showProject);
  }

  render() {
    var stars = []
    var numberOfStars = 10;
    var xRandom, yRandom , random = 0;

      for (var i = 0; i < numberOfStars + 1; i ++){
          random = Math.random()*3+1;
          xRandom = Math.random()*100+1;
          yRandom = Math.random()*100+1;
          stars.push(<Star size={random + "px"} 
          x={xRandom + "%"} 
          y={yRandom + "%"} 
          delay={(Math.random()*5+1) + "s"}></Star>);
      }

      var projectRender = ""; 
      console.log(projectRender);
      switch (this.state.showProject){
        case "start":
          projectRender = (
            <div>
              <Summary>Take a look at my projects!</Summary>
              <Summary>Click a star to find out more - </Summary>
            </div>
          );
          break;
        case "1":
          projectRender = (
          <div>
            <TextWrapper1></TextWrapper1>
            <TextWrapper2></TextWrapper2>
          </div>
          );
          break;
        default:
          break;
      }

    return (
      <Wrapper>
        <NavigationBar showAbout={this.props.showAbout}
                       showHome ={this.props.showHome}
                       showContact={this.props.showContact}>
                       </NavigationBar>
        <FadeInWrapper>
          <StarWrapper>
            {stars}
            <ProjectStar onClick={() => this.showProject("1")} top="40%" left="20%"></ProjectStar>
            <ProjectStar top="40%" left="40%"></ProjectStar>
            <ProjectStar top="40%" left="60%"></ProjectStar>
            <ProjectStar top="40%" left="80%"></ProjectStar>
          </StarWrapper>
          <SummaryWrapper>
            {projectRender}
          </SummaryWrapper>
        </FadeInWrapper>
      </Wrapper>

    );

  }
}

export default ProjectsContainer;