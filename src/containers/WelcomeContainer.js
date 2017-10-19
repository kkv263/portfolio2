import React, { Component } from 'react';
import styled from 'styled-components';
import NavigationBar from '../components/NavigationBar'

const Wrapper = styled.div`
position: relative;
background-color: #AFC2D5;
width: 50%;
height: 100vh;
float: right;

`

class WelcomeContainer extends Component {
  render() {
    return (
      <Wrapper>
        <NavigationBar></NavigationBar>
        Lorem ipsum dolor sit amet, vide oblique no per, mei quidam nonumes no. 
        Natum iuvaret ei nam, sit et patrioque incorrupte, no ius invenire gubergren. 
        Te graeco dolorem mea, ne unum solet tincidunt nec. Commune expetenda an vix, 
        cum eu fabellas deseruisse, an impetus euismod incorrupte vix. Ex usu sint vivendum torquatos, 
        vel ancillae liberavisse ex, eu alia docendi mediocritatem vis. Eu amet utinam eripuit his, 
        sit ignota omnium at.

        Mei eu audire phaedrum, brute epicuri similique ea ius. Mea ex fuisset dignissim, te ius iuvaret 
        quaestio appellantur, in eum odio feugait concludaturque. Idque senserit splendide et sea, 
        pro viris quaerendum ad. No mel amet ponderum. Ubique nostro in 
      </Wrapper> 
    );
  }
}

export default WelcomeContainer;