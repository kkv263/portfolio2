import React, { Component } from 'react';
import HomeContainer from './containers/HomeContainer';
import WelcomeContainer from './containers/WelcomeContainer';
class App extends Component {
  render() {
    return (
      <div>
        <HomeContainer></HomeContainer>
        <WelcomeContainer></WelcomeContainer>
      </div>
    );
  }
}

export default App;
