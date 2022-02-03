import React from 'react';
//import { Link } from 'react-router-dom';
// import { CSSTransition } from 'react-transition-group';
import './style.scss';

const Footer = ({ project }) => {

    return (
        <div className='footer'>
            <h1 className='title'>contactez-moi </h1>
            <div className='content'>
                <ul className='list'>
                    <li className='item'>Delphine GASPAR</li>
                    <li className='item'>Paris, Ile de France</li>
                    <li className='item'>06 70 93 41 09</li>
                    <li className='item'>gaspardelphine01@gmail.com</li>
                </ul>
            </div>
            <div className='style'>©2022</div>
        </div>
    )
}

export default Footer;