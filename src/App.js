import React, { Component } from 'react';
import './App.css';
import Main from './components/main'

class App extends Component {
  state = {
    user : [],
    inputValue : '',
  }
  addCard=()=>{

    let user = this.state.inputValue;
    let arr = this.state.user;
    arr.push(user);
    this.setState({
      user: arr
    })
  }

  getInputValue=(e)=>{
    this.setState({
      inputValue : e.target.value
    })
  }
  startRandom=()=>{
    let arr = [];
    const length = this.state.user.length;
  
    const victim = getRandomInt(length);
    let  v=   this.state.user[victim]
    arr.push(v);
     this.setState({
      user : arr
     })

  }
  render() {

    return (
      <div className="App">
      <Main clickBtn={this.addCard} getValue={this.getInputValue} random={this.startRandom}/>
     { this.state.user.map((el)=>{
        return (
          <div>
            <p>{el}</p>
          </div>
        )
      })}
      </div>
    );
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default App;
