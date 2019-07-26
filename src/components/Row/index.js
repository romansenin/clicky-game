import React, { Component } from "react";

export default class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <img src="#" alt="" />
        <img src="#" alt="" />
        <img src="#" alt="" />
        <img src="#" alt="" />
      </div>
    );
  }
}