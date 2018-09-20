import React, { Component } from "react";
import panel from "/components/panel";
import wrapper from "./components/wrapper";
import header from "./panels.json";
import "./app.css";
import { createDecipher } from "crypto";

class App extends Component {
    state = {
        panels,
        score: 0,
        highscore: 0
    };

    gameEnd = () => {
        if (this.state.score > this.state.highscore) {
            this.setState({ highscore: this.state.score}, function() {
            console.log(this.state.highscore);
            });
        }
        this.state.panels.forEach(panel => {
            panel.count = 0;
        });
        alert("Game Over");
        this.setState({score: 0});
        return true;
    }

    clickCount = id => {
        this.state.panels.find((o, i) => {
            if (o.id === id) {
                if(panels[i].count === 0) {
                    panels[i].count = panels[i].count + 1;
                    this.setState({score : this.state.score + 1}, function() {
                    console.log(this.state.score);
                    });
                    this.state.panels.sort(() => Math.random() - 0.5)
                    return true;
                } else {
                    this.gameEnd();
                }
            }
        });
    }

    render() {
        return (
            <Wrapper>
                <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
                {this.state.panels.map(panel => (
                    <Panel 
                        clickCOunt={this.clickCount}
                        id={createDecipher.id}
                        key={createDecipher.id}
                        image={createDecipher.image}
                    />
                ))}
            </Wrapper>
        );
    }  
}

export default App;