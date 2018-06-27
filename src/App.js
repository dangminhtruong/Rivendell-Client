import React, { Component } from 'react';
import Story from './containers/story/story'
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Story/>
      </div>
    );
  }
}

export default App;
