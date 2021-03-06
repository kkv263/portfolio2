import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar';
import { DownArrow, FadeInWrapper } from '../styles/Shared.style';
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
              <ProjectText>Pegasus: MacroCalculator</ProjectText>
              <ProjectStar full src={require('../assets/pegasus.svg')} h="60%" w="60%" top="15%" left="20%"/>
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
            <ProjectText>Big Dipper: Pintos</ProjectText>
            <ProjectStar full src={require('../assets/bigdipper.svg')} h="85%" w="85%" top="0%" left="7%"/>
            <ResourceText>
                 Tools: C<br /><br />
              </ResourceText>
            </TextWrapper1>
            <TextWrapper2>
              <ProjectText>
                  Expanded a toy operating system in C to include priority scheduling, allowed argument 
                  passing on the stack, implemented system calls for user programs, added and manipulated 
                  virtual memory, and converted the existing single-thread file system into an multi-threaded file system.
              </ProjectText>
            </TextWrapper2>
          </FadeInWrapper2>
          );
        break;
      case "3":
        projectRender = (
          <FadeInWrapper3>
            <TextWrapper1>
            <ProjectText>Leo: Portfolio</ProjectText>
            <ProjectStar full src={require('../assets/leo.svg')} h="75%" w="75%" top="0%" left="10%"/>
            <ResourceText>
                 Tools: React, ES6<br /><br />
                 <a href="https://github.com/kkv263/portfolio2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </ResourceText>
            </TextWrapper1>
            <TextWrapper2>
              <ProjectText>
                My portfolio lets you take a sneak peek about me
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
            <ProjectText>Canis-Major: BookIDB</ProjectText>
            <ProjectStar full src={require('../assets/canismajor.svg')} h="50%" w="50%" top="8%" left="25%"/>
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
        case "5":
        projectRender = (
          <FadeInWrapper4>
            <TextWrapper1>
            <ProjectText>Aries: JpnVerbs</ProjectText>
            <ProjectStar full src={require('../assets/aries.svg')} h="60%" w="60%" top="10%" left="25%"/>
            <ResourceText>
                 Tools: Express, Node.js, React, MongoDB <br /><br/>
                 <a href="https://github.com/kkv263/jpnverbs" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </ResourceText>
            </TextWrapper1>
            <TextWrapper2>
              <ProjectText>
              An online database the conjugates Japanese verbs utilizing a MongoDB database to store verb records and conjugation forms. 
              Node + Express serve the API and the web application online. The view layers are rendered in React to create a easy and 
              readable user interface. 
              </ProjectText>
            </TextWrapper2>
          </FadeInWrapper4>
          );
        break;
      default:
        break;
    }

    return (
      <div>
        <NavigationBar showAbout={this.props.showAbout}
                       showHome ={this.props.showHome}
                       showContact={this.props.showContact}>
                       </NavigationBar>
        <FadeInWrapper>
          <StarWrapper>
            {stars}
            <ProjectStar onClick={() => this.showProject("3")} src={require('../assets/leo.svg')} 
            top="20%" left="10%" h="30%" w="30%"/>
            <ProjectStar onClick={() => this.showProject("2")} src={require('../assets/bigdipper.svg')} 
            top="60%" left="30%" h="30%" w="30%"/>
            <ProjectStar onClick={() => this.showProject("1")} src={require('../assets/pegasus.svg')}
            top="50%" left="80%" h="30%" w="30%"/>
            <ProjectStar onClick={() => this.showProject("4")} src={require('../assets/canismajor.svg')}
            top="20%" left="60%" h="30%" w="30%"/> 
            <ProjectStar onClick={() => this.showProject("5")} src={require('../assets/aries.svg')}
            top="0%" left="30%" h="30%" w="30%"/> 
          </StarWrapper>
          <SummaryWrapper>
            {projectRender}
          </SummaryWrapper>
            <DownArrow src={require('../assets/chevron.svg')} onClick = {this.props.showContact}/>
        </FadeInWrapper>
      </div>

    );

  }
}

export default ProjectsContainer;