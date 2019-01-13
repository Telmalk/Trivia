import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Win = ({score}) => {
    return (
        <section>
            <h1>Félicitaion !!!!!!!!</h1>
            <h3>Votre score final est de 10</h3>
             <Link to={'/'}>Retour a la home</Link>
        </section>
    );
}

export default Win;
