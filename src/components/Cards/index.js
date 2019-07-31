import React, { Component } from "react";
import Row from "../Row";
import "./cards.css";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.cards
    };
  }

  render() {
    return (
      <div className="cards-container">
        <Row
          images={this.state.cards.slice(0, 4)}
          handleHeaderChange={this.props.handleHeaderChange}
        />
        <Row
          images={this.state.cards.slice(4, 8)}
          handleHeaderChange={this.props.handleHeaderChange}
        />
        <Row
          images={this.state.cards.slice(8, 12)}
          handleHeaderChange={this.props.handleHeaderChange}
        />
        <Row
          images={this.state.cards.slice(12, 16)}
          handleHeaderChange={this.props.handleHeaderChange}
        />
      </div>
    );
  }
}
