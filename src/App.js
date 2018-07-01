import React, { Component } from 'react';
import Story from './containers/stories'
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact component={Story}/>
        </Switch>
      </div>
    );
  }
}

export default App;
