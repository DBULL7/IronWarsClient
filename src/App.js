import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  getCode(e) {
    if(!e) return 
    let text = e.target.innerText
    this.setState({text: text})
  }

  make() {
    if (!this.state.text) return 
    const script = document.createElement("script");
    script.append(this.state.text)
    let placeToAppend = document.getElementById('code')
    placeToAppend.append( script );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div id="terminal" onKeyUp={(e) => {this.getCode(e)}} contentEditable={true}></div>
        <button onClick={() => this.make()}>Create</button>
        <pre id="code"></pre>                
      </div>
    );
  }
}

export default App;
