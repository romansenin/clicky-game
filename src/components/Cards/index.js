import React, { Component } from "react";
import Row from "../Row";
import "./cards.css";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cards-container">
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    );
  }
}
