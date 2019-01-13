import React, { Component, createRef } from 'react';
import GameOver from './GameOver';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class GameOverContainer extends Component {

    render() {
        return (
            <GameOver score={0} />
        );
    }
}

export default GameOverContainer;
