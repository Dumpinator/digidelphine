import React from 'react';
import { Link } from 'react-router-dom';
// import { CSSTransition } from 'react-transition-group';
import { ImLinkedin } from 'react-icons/im'
import './style.scss';


const Projet = ({ icon }) => {

    return (
        <Link to='/' id='icons'>
            { icon ? icon : <ImLinkedin /> }
        </Link>
    )
}

export default Projet;