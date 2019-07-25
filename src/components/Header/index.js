import React, { Component } from "react";
import "./style.css";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message :  this.props.message,
      score : this.props.score,
      topScore : this.props.topScore
    }
  }
  render() {
    return (
      <div className="container">
        <p>Clicky Game</p>
        <p>{this.state.message}</p>
        <p>Score: {this.state.score} | Top Score: {this.state.topScore}</p>
      </div>
    )
  }
}

