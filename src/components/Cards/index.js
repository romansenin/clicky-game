import React, { Component } from "react";
import Row from "../Row";
import "./cards.css";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.shuffleCards = this.shuffleCards.bind(this);
    this.state = {
      cards: this.props.cards
    };
  }

  componentDidMount() {
    this.shuffleCards();
  }

  shuffleCards() {
    const newCards = this.state.cards.slice();
    for (let i = 0; i < 16; i++) {
      const randPos = newCards[i].clicked
        ? Math.floor(Math.random() * 16)
        : Math.floor(Math.random() * newCards.length); // this logic makes sure a clicked card stays visible
      const temp = newCards[i];
      newCards[i] = newCards[randPos];
      newCards[randPos] = temp;
    }
    this.setState({ cards: newCards });
  }

  render() {
    return (
      <div className="cards-container">
        <Row
          images={this.state.cards.slice(0, 4)}
          handleHeaderChange={this.props.handleHeaderChange}
          shuffleCards={this.shuffleCards}
        />
        <Row
          images={this.state.cards.slice(4, 8)}
          handleHeaderChange={this.props.handleHeaderChange}
          shuffleCards={this.shuffleCards}
        />
        <Row
          images={this.state.cards.slice(8, 12)}
          handleHeaderChange={this.props.handleHeaderChange}
          shuffleCards={this.shuffleCards}
        />
        <Row
          images={this.state.cards.slice(12, 16)}
          handleHeaderChange={this.props.handleHeaderChange}
          shuffleCards={this.shuffleCards}
        />
      </div>
    );
  }
}
