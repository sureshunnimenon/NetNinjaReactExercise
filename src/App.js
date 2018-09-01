import React, { Component } from 'react';
import Sure from './sure.js';
import AddCoder from './addCoder.js';

class App extends Component {
  state = {
    coders: [
      {name: "sure", age:40, belt:"black", id:1},
      {name: "sanjeev", age:21, belt:"black", id:2},
      {name: "Vijay", age:22, belt:"blue", id:3},
      {name: "Far", age:40, belt:"purple", id:4}
    ]
  }

  addCoder = (coder) => {
    coder.id=Math.random();
    let coders = [...this.state.coders, coder];
    this.setState({
      coders: coders
    })   
    }

  deleteCoder = (id) => {
      console.log("clicked delete!")
    }
  
  render() {
    return (
      <div className="App" >
        <h1> My first React App </h1>
        <p> Welcome! </p> <hr />
        
        <Sure deleteCoder={this.state.deleteCoder} coders={this.state.coders} />
        <AddCoder addCoder = {this.addCoder}/>            
      </div>
    );
  }
}

export default App;
