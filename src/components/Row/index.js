import React, { Component } from "react";
import Card from "../Card";

export default class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}