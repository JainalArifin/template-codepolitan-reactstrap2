import React, { Component } from 'react';
import Nav from './components/Nav'
import Jumbotron from './components/Jumbotron'
import Program from './components/Program'
import Articles from './components/Articles'
import SectionSubmit from './components/SectionSubmit'
import Interactiv from './components/Interactive'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Program />
        <Articles />
        <SectionSubmit />
        <Interactiv />
      </div>
    );
  }
}

export default App;
