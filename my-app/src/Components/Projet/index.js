import React from 'react';
import { Link } from 'react-router-dom';
// import { CSSTransition } from 'react-transition-group';
import './style.scss';

const Projet = ({ project }) => {

    return (
        <Link to={`projects/${project.id}`} id={`project-${project.id}`}>
            <div className='box' style={{ backgroundImage: `url(${project.image})` }}>
                <div className='box-tips'>
                    <div className='box-content'>
                        <div className='box-content-title'>{project.title}</div>
                        <div className='box-content-text'>{project.text}</div>
                        <div className='box-content-tags'>{project.tags}</div>
                    </div>
                </div>
            </div>
            <div className='box2'></div>
        </Link>
    )
}

export default Projet;