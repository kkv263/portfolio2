import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar';
import { Wrapper, ArrowWrapper, DownArrow, FadeInWrapper } from '../styles/Shared.style';
import { Star, StarWrapper, ProjectStar, SummaryWrapper, FadeInWrapper2, 
         Summary, TextWrapper1, TextWrapper2, ProjectText, ResourceText,
         FadeInWrapper3, FadeInWrapper4 } from '../styles/Projects.style';

class ProjectsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      showProject: "start",
      showStars: []
    };
    this.showProject = this.showProject.bind(this);
  }  

  showProject(value){
    this.setState({ showProject : value} );
  }

  componentDidMount(){
    // Component will mount with # of stars of random xPos, yPos,
    // size, and animation delay. It's in this lifecycle so that
    // state stays the same and will not re-render new variable values.
    var showStars = [];
    var numberOfStars = 50;

      for (var i = 0; i < numberOfStars + 1; i ++){
          var starArray = [];
          starArray[0] = Math.random()*3+1;
          starArray[1] = Math.random()*100+1;
          starArray[2] = Math.random()*100+1;
          starArray[3] = Math.random()*5+1;
          showStars[i] = starArray;
      }

    this.setState({
      showStars: showStars
    });
  }

  // shouldComponentUpdate(nextState, nextProps) {
  //   return nextState !== this.state.showProject;
  // }

  render() {  

    
    var stars = this.state.showStars;
    stars = stars.map(function(item,index){
      return (
        <Star size={item[0] + "px"} 
        x={item[1] + "%"} 
        y={item[2] + "%"} 
        delay={item[3] + "s"} 
        key={index}></Star>
      );
    });

    var projectRender = ""; 

    // Switch statement to render project description on click of star.
    switch (this.state.showProject){
      case "start":
        projectRender = (
          <div>
            <Summary>Take a look at my projects!</Summary>
            <Summary>Click a constellation to find out more - </Summary>
          </div>
        );
        break;
      case "1":
        projectRender = (
          <FadeInWrapper>
            <TextWrapper1>
              <ProjectText>Pegasus:</ProjectText>
              <ProjectStar full src={require('../assets/pegasus.svg')} h="150px" w="150px" top="15%" left="10%"/>
              <ResourceText>
                 Tools: Android Studio, Java, XML<br /><br />
                 <a href="https://github.com/kkv263/MacroCalculator" target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </ResourceText>
            </TextWrapper1>
            <TextWrapper2>
              <ProjectText>
                Macro Calculator is a Google Play Store application with almost 50,000+ total downloads.
                This application uses the "Revised Harriss Benedict Equation" to calculate the user's
                daily macronutrients and a daily amount of calories for the user to utilize.
              </ProjectText>
            </TextWrapper2>
          </FadeInWrapper>
          );
        break;
      case "2":
        projectRender = (
          <FadeInWrapper2>
            <TextWrapper1>
            <ProjectText>Big Dipper:</ProjectText>
            <ProjectStar full src={require('../assets/bigdipper.svg')} h="200px" w="200px" top="6%" left="7%"/>
            <ResourceText>
                 Tools: Python, Reddit PRAW, Keepa API, Amazon API<br /><br />
                 <a href="https://github.com/kkv263/redditBots/tree/master/figuresBot" target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </ResourceText>
            </TextWrapper1>
            <TextWrapper2>
              <ProjectText>
                figuresBot is a Reddit AI that filters through Reddit threads and user comments to 
                capture Amazon links. The bot uses these links to query the Amazon product that was
                listed and show a graph representing the price history of the product.
              </ProjectText>
            </TextWrapper2>
          </FadeInWrapper2>
          );
        break;
      case "3":
        projectRender = (
          <FadeInWrapper3>
            <TextWrapper1>
            <ProjectText>Leo:</ProjectText>
            <ProjectStar full src={require('../assets/leo.svg')} h="150px" w="150px" top="10%" left="15%"/>
            <ResourceText>
                 Tools: React, ES6<br /><br />
                 <a href="https://github.com/kkv263/portfolio2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </ResourceText>
            </TextWrapper1>
            <TextWrapper2>
              <ProjectText>
                You're currently viewing my project!☺ My portfolio lets you take a sneak peak about me
                and about what I do. The website utilizes beautiful and smooth animations followed with
                a clean design with mobile support. Its purpose is to showcase me, my projects, my 
                experience, and gives users a platform to contact me.
              </ProjectText>
            </TextWrapper2>
          </FadeInWrapper3>
          );
        break;
        case "4":
        projectRender = (
          <FadeInWrapper4>
            <TextWrapper1>
            <ProjectText>Canis-Major:</ProjectText>
            <ProjectStar full src={require('../assets/canismajor.svg')} h="125px" w="125px" top="10%" left="20%"/>
            <ResourceText>
                 Tools: React, Flask, SQLAlchemy, Bootstrap, Python <br /><br/>
                 <a href="https://github.com/savsmith/idb" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </ResourceText>
            </TextWrapper1>
            <TextWrapper2>
              <ProjectText>
                BookIDB or BetterReads is a online database of books. The website features books, authors,
                series, and reviews that a user can filter and search using the API. I worked on 
                mainly the frontend of the project and contributed to some of the backend for the project.
              </ProjectText>
            </TextWrapper2>
          </FadeInWrapper4>
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
            <ProjectStar onClick={() => this.showProject("3")} src={require('../assets/leo.svg')} 
            top="20%" left="10%" h="100px" w="100px"/>
            <ProjectStar onClick={() => this.showProject("2")} src={require('../assets/bigdipper.svg')} 
            top="35%" left="30%" h="170px" w="170px"/>
            <ProjectStar onClick={() => this.showProject("1")} src={require('../assets/pegasus.svg')}
            top="50%" left="80%" h="100px" w="100px"/>
            <ProjectStar onClick={() => this.showProject("4")} src={require('../assets/canismajor.svg')}
            top="20%" left="60%" h="100px" w="100px"/> 
          </StarWrapper>
          <SummaryWrapper>
            {projectRender}
          </SummaryWrapper>
          <ArrowWrapper pos="8%">
            <DownArrow src={require('../assets/chevron.svg')} onClick = {this.props.showContact}/>
          </ArrowWrapper>
        </FadeInWrapper>
      </Wrapper>

    );

  }
}

export default ProjectsContainer;