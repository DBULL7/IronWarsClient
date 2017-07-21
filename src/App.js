import React, { Component } from 'react';
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
        <div id="terminal" onKeyUp={(e) => {this.getCode(e)}} contentEditable={true}></div>
        <button onClick={() => this.make()}>Create</button>
        <pre id="code"></pre>                
      </div>
    );
  }
}

export default App;
