import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Projet = ({ project }) => {

    const { id, colors, type, title, tags, image } = project;
    const [hover, setHover] = useState(false);

    const styles = {
        transform: `scale(1.2)`,
        margin: `0 10px`,
        transition: `all .2s ease-in-out`,
    };

    return (
        <NavLink to={`/projets/${project.id}`} id={`project-${id}`} style={hover ? styles : null}>
            <div className='box' style={{ backgroundImage: `url(${image})` }}>
                <div className='box-tips'
                    style={hover ? { backgroundColor: `${colors[1]}` } : null}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}>
                    <div className='box-content'>
                        <div className='box-content-title'>{title}</div>
                        <div className='box-content-text'>{type}</div>
                        <div className='box-content-tags'>{tags}</div>
                    </div>
                </div>
            </div>
            <div className='box2' style={{ backgroundColor: `${colors[1]}`}}></div>
        </NavLink>
    )
}

export default Projet;