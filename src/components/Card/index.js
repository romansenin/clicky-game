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
        <img draggable="false" src={this.props.image.image} alt="" />
      </div>
    );
  }
}