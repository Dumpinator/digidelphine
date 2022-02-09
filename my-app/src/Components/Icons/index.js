import React from 'react';
// import { CSSTransition } from 'react-transition-group';
import { ImLinkedin } from 'react-icons/im'
import './style.scss';


const Icons = ({ icon }) => {

    return (
        <a target="_blank" href='https://www.linkedin.com/in/delphine-gaspar/' id='icons' rel="noreferrer">
            { icon ? icon : <ImLinkedin /> }
        </a>
    )
}

export default Icons;