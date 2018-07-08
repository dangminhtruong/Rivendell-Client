import React, { Component } from 'react';
import Stories from './containers/stories'
import { Route, Switch } from 'react-router-dom';
import Story from './containers/story';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact component={Stories} />
          <Route path='/story/:id' exact component={Story} onUpdate={() => window.scrollTo(0, 0)} />
        </Switch>
      </div>
    );
  }
}

export default App;
