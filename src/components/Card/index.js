import React, { Component } from "react";
import "./card.css";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card">
        <img src="http://placehold.jp/150x150.png" alt="" />
      </div>
    );
  }
}