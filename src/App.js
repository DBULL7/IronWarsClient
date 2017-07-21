import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import SoloMode from './SoloMode'

class App extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route exact path='/solo' render={() => {
            return (
              <SoloMode/>
            )
          }}/>
          {/* <Route exact path='/' render={() => {
            
          }}/> */}
        </Switch>
      </section>
    )
  }
}

export default App;
