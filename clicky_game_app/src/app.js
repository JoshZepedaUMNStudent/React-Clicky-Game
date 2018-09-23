import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import "./App.css";
import _ from "underscore";

class App extends Component {
    state = {
        cards,
        score: 0,
        highscore: 0
    };

    gameEnd = () => {
        if (this.state.score > this.state.highscore) {
            this.setState({ highscore: this.state.score}, function() {
            console.log(this.state.highscore);
            });
        }
        this.state.cards.forEach(card => {
            card.count = 0;
        });
        alert("Game Over");
        this.setState({score: 0});
        return true;
    }

    shuffleCoins = () => {
        this.setState({cards: _.shuffle(this.state.cards)})
    }

    render() {
        return (
            <Wrapper>
                <header score={this.state.score} highscore={this.state.highscore}>Welcome to the Click Game! Click on a coin to start the game!</header>
                {this.state.cards.map(card => (
                    <Card 
                        clickCount={this.shuffleCoins}
                        id={card.id}
                        key={card.id}
                        image={card.image}
                    />
                ))}
            </Wrapper>
        );
    }  
}

export default App;