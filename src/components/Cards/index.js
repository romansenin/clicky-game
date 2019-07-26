import React, { Component } from "react";
import "./cards.css";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Row />
        <Row />
        <Row />
        <Row />
      </>
    );
  }
}
