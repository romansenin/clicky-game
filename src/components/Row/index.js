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
        return <Card key={index} image={value}></Card>
      })}
      </div>
    );
  }
}