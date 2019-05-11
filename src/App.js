import React, { Component } from "react";
import "./App.css";
import Main from "./components/main";

import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";

class App extends Component {
  state = {
    user: [],
    inputValue: ""
  };
  addCard = () => {
    let user = this.state.inputValue;
    let arr = this.state.user;
    arr.push(user);
    this.setState({
      user: arr
    });
  };

  getInputValue = e => {
    this.setState({
      inputValue: e.target.value
    });
  };
  startRandom = () => {
    let arr = [];
    const length = this.state.user.length;

    const victim = getRandomInt(length);
    let v = this.state.user[victim];
    arr.push(v);
    this.setState({
      user: arr
    });
  };
  render() {
    return (
      <div className="App">
        <Main
          clickBtn={this.addCard}
          getValue={this.getInputValue}
          random={this.startRandom}
        />
        <div className="users">
          {this.state.user.map((el,ind) => {
            return (
              <Chip
                key ={ind}
                className="chip"
                icon={<FaceIcon />}
                label={el}
                color="secondary"
              />
            );
          })}
        </div>
      </div>
    );
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default App;
