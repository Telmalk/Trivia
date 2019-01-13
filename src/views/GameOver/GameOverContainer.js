import React, { Component, createRef } from 'react';
import GameOver from './GameOver';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class GameOverContainer extends Component {
    state = {
        score: this.props.match.params.score
    }

    render() {
        return (
            <GameOver score={this.state.score} />
        );
    }
}

export default GameOverContainer;
