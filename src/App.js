import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  test(e) {
    if(!e) return 
    // console.log(e.target.innerText)
    let text = e.target.innerText
    this.setState({text: text})
  }

  make() {
    if (!this.state.text) return 
    
    this.setState({script: [<script type="text/javascript">{this.state.text}</script>]})

    // return (<script>{this.state.text}</script>)
  }

  check() {
    if (!this.state.script) return
    return this.state.script[0]
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div id="terminal" onKeyUp={(e) => {this.test(e)}} contentEditable={true}></div>
        <button onClick={() => this.make()}>Create</button>
        <pre id="pre">{this.check()}</pre>
        
      </div>
    );
  }
}

export default App;
