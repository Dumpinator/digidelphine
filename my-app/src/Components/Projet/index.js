import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { CSSTransition } from 'react-transition-group';
import './style.scss';

const Projet = ({ project }) => {

    const { id, colors } = project;
    const [hover, setHover] = useState(false);

    return (
        <NavLink to={`/projets/${project.id}`} id={`project-${id}`}>
            <div className='box' style={{ backgroundImage: `url(${project.image})` }}>
                <div className='box-tips'
                    style={ hover ? { backgroundColor: `${colors[1]}` } : null }
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}>
                    <div className='box-content'>
                        <div className='box-content-title'>{project.title}</div>
                        <div className='box-content-text'>{project.url}</div>
                        <div className='box-content-tags'>{project.tags}</div>
                    </div>
                </div>
            </div>
            <div className='box2' style={{ backgroundColor: `${colors[1]}`}}></div>
        </NavLink>
    )
}

export default Projet;