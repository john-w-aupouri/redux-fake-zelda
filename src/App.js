import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import logo1 from './redux.svg';

import World from './features/world';

class App extends Component {
  
  render() { 
    return (
      <div className="App">
        <section>
          <img id="redux-logo" src={logo1} alt="redux-logo" />
          <div>
            <World />
          </div>
          <img id="react-logo" src={logo} alt="react-logo" />
        </section>
      </div>
    );
  }
}
 
export default App;