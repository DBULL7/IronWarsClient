import React, { Component } from 'react'
import './styles/solomode.css'
class SoloMode extends Component {
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
      <div className="app">
        <div id="left-side">
          <div id="terminal" onKeyUp={(e) => {this.getCode(e)}} contentEditable={true}></div>
          <div id="run-button-div">
            <button id="run-button" onClick={() => this.make()}>Run</button> 
          </div>
         </div>
         <div id="right-side">          
            <div id="repl"></div>
            <div id="scoreboard"></div>
         </div>
        <pre id="code"></pre>                
      </div>
    );
  }  
}

export default SoloMode