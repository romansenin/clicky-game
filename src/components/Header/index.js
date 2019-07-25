import React, { Component } from "react";
// component css file

export default class Header extends Component {
  constructor() {
    super(props);

    this.state = {
      message =  this.props.message,
      score = this.props.score,
      topScore = this.props.topScore
    }
  }
  render() {
    return (
      <>
        <p>Clicky Game</p>
        <p>{this.state.message}</p>
        <p>Score: {this.state.score} | Top Score: {this.state.topScore}</p>
      </>
    )
  }
}

