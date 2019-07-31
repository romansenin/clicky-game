import React, { Component } from "react";
import Card from "../Card";
import "./row.css";

export default class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        {this.props.images.map((value, index) => {
          return (
            <Card
              key={index}
              image={value}
              handleHeaderChange={this.props.handleHeaderChange}
              shuffleCards={this.props.shuffleCards}
            />
          );
        })}
      </div>
    );
  }
}
