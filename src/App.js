import React, { Component } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import icons from "./icons.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleHeaderChange = this.handleHeaderChange.bind(this);
    this.state = {
      headerMessage: "Click an image to begin!",
      score: 0,
      topScore: 0
    };
  }

  handleHeaderChange(headerMessage) {
    this.setState({ headerMessage });
    if (headerMessage === "You guessed incorrectly!") {
      this.setState({ score: 0 });
    } else {
      this.setState(state => ({
        score: state.score + 1,
        topScore:
          state.score + 1 > state.topScore ? state.score + 1 : state.topScore
      }));
    }
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
        <Cards cards={icons} handleHeaderChange={this.handleHeaderChange} />
        <Footer />
      </>
    );
  }
}
