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
        <Row images={this.state.cards.slice(0, 4)}/>
        <Row images={this.state.cards.slice(4, 8)}/>
        <Row images={this.state.cards.slice(8, 12)}/>
        <Row images={this.state.cards.slice(12, 16)}/>
      </div>
    );
  }
}
