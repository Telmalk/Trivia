import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const GameOver = ({score}) => {
    return (
        <section>
            <h1>GAME OVER !!</h1>
            <h3>Votre score final est de {score}</h3>
             <Link to={'/'}>Retour a la home</Link>
        </section>
    );
}

export default GameOver;
