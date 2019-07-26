import React, { Component } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      headerMessage: "Click an image to begin!",
      score: 0,
      topScore: 0
    };
  }
  render() {
    return (
      <>
        <Header
          message={this.state.headerMessage}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Intro />
      </>
    );
  }
}
