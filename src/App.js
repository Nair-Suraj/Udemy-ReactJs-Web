import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  
  state={
    headers:[
      'What is Lorem Ipsum?',
      'Why do we use it?',
      'Where does it come from?'
    ]
  }

  updateTopicNameHandler= (event) =>{
    this.setState({
      headers:[
        event.target.value,
        'Why do we use it?',
        'Where does it come from?'
      ]
    })
  }
  render() {
    return (
      <div className="App">
       <h1>React Assignment-1</h1>
       <UserInput updateName={this.updateTopicNameHandler} topic={this.state.headers[0]}/>
       <UserOutput topic={this.state.headers[0]}/>
       <UserOutput topic={this.state.headers[1]}/>
       <UserOutput topic={this.state.headers[2]}/>
      </div>
    );
  }
}

export default App;
