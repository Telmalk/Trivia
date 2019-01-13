import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const GameOver = ({score}) => {
    return (
        <section className={'gameOverContainer'}>
            <h1 className={'gameOverTitle'}>GAME OVER !!</h1>
            <h3 className={'gameOver-tewt'}>Votre score final est de {score}</h3>
             <Link className={'linkToHome'} to={'/'}>Retour a la home</Link>
        </section>
    );
}

export default GameOver;
