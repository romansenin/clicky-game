import React, { Component } from "react";
import Row from "../Row";
import "./cards.css";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.updateCards = this.updateCards.bind(this);
    this.resetCards = this.resetCards.bind(this);
    this.state = {
      cards: this.props.cards,
      numClicked: 0
    };
  }

  componentDidMount() {
    this.setState({ cards: this.shuffleCards(this.state.cards) });
  }

  shuffleCards(cards) {
    for (let i = 0; i < 16; i++) {
      const randPos = cards[i].clicked
        ? Math.floor(Math.random() * 16)
        : Math.floor(Math.random() * cards.length); // ensures clicked cards stay visible

      // swap
      const temp = cards[i];
      cards[i] = cards[randPos];
      cards[randPos] = temp;
    }
    return cards;
  }

  updateCards(clickPos) {
    const newCards = this.state.cards.slice();
    newCards[clickPos].clicked = true;
    const newCount = this.state.numClicked + 1;

    this.setState({ numClicked: newCount }, () => {
      if (this.state.numClicked === 21) {
        // tell user they won
        return;
      }

      this.shuffleCards(newCards);

      if (this.state.numClicked >= 16) {
        // fetch new unclicked card
        let newPos;
        for (let i = 16; i < newCards.length; i++) {
          if (!newCards[i].clicked) {
            newPos = i;
            break;
          }
        }
        const randPos = Math.floor(Math.random() * 16);

        // swap
        const temp = newCards[randPos];
        newCards[randPos] = newCards[newPos];
        newCards[newPos] = temp;
      }

      this.setState({ cards: newCards });
    });
  }

  resetCards() {
    const newCards = this.state.cards;
    for (let i = 0; i < newCards.length; i++) {
      newCards[i].clicked = false;
    }
    this.shuffleCards(newCards);
    this.setState({ cards: newCards, numClicked: 0 });
  }

  render() {
    return (
      <div className="cards-container">
        <Row
          offset={0}
          images={this.state.cards.slice(0, 4)}
          handleHeaderChange={this.props.handleHeaderChange}
          updateCards={this.updateCards}
          setClicked={this.setClicked}
          resetCards={this.resetCards}
        />
        <Row
          offset={4}
          images={this.state.cards.slice(4, 8)}
          handleHeaderChange={this.props.handleHeaderChange}
          updateCards={this.updateCards}
          setClicked={this.setClicked}
          resetCards={this.resetCards}
        />
        <Row
          offset={8}
          images={this.state.cards.slice(8, 12)}
          handleHeaderChange={this.props.handleHeaderChange}
          updateCards={this.updateCards}
          setClicked={this.setClicked}
          resetCards={this.resetCards}
        />
        <Row
          offset={12}
          images={this.state.cards.slice(12, 16)}
          handleHeaderChange={this.props.handleHeaderChange}
          updateCards={this.updateCards}
          setClicked={this.setClicked}
          resetCards={this.resetCards}
        />
      </div>
    );
  }
}
