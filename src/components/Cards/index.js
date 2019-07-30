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
        <Row images={this.props.images.slice(0, 4)}/>
        <Row images={this.props.images.slice(4, 8)}/>
        <Row images={this.props.images.slice(8, 12)}/>
        <Row images={this.props.images.slice(12, 16)}/>
      </div>
    );
  }
}
