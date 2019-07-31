import React, { Component } from "react";
import "./card.css";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {};
  }

  handleClick() {
    if (this.props.image.clicked) {
      this.props.handleHeaderChange("You guessed incorrectly!")
      this.props.resetCards();
    } else {
      this.props.handleHeaderChange("You guessed correctly!");
      this.props.shuffleCards(this.props.id);
    }
  }

  render() {
    return (
      <div className="card" onClick={this.handleClick}>
        <img draggable="false" src={this.props.image.image} alt="" />
      </div>
    );
  }
}