import React, { Component } from 'react';
import HomeContainer from './containers/HomeContainer';
import HomeContainer2 from './containers/HomeContainer2';
class App extends Component {
  render() {
    return (
      <div>
        <HomeContainer></HomeContainer>
        <HomeContainer2></HomeContainer2>
      </div>
    );
  }
}

export default App;
