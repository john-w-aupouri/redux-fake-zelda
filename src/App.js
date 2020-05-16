import React, { Component } from 'react';
import './App.css';
import logo1 from './redux.svg';

import World from './features/world';

class App extends Component {
  
  render() { 
    return (
      <div className="App">
        <div className="world-wrapper">
          <World />
        </div>
      </div>
    );
  }
}
 
export default App;