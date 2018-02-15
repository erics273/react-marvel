import React, { Component } from 'react';
import './App.css';

import CharacterList from './containers/CharacterList'
import Navigation from './components/navigation/Navigation'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <CharacterList />
      </div>
    );
  }
}

export default App;
