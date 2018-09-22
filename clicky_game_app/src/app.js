import React, { Component } from "react";
import panel from "./components/panel";
import wrapper from "./components/wrapper";
import header from "./panels.json";
import { createDecipher } from "crypto";

class App extends Component {
    state = {
        panel,
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
                if(panel[i].count === 0) {
                    panel[i].count = panel[i].count + 1;
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
            <wrapper>
                <header score={this.state.score} highscore={this.state.highscore}>Clicky Game </header>
                {this.state.panel.map(panel => (
                    <panel 
                        clickCOunt={this.clickCount}
                        id={createDecipher.id}
                        key={createDecipher.id}
                        image={createDecipher.image}
                    />
                ))}
            </wrapper>
        );
    }  
}

export default App;