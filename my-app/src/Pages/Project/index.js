import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
//import { CSSTransition } from 'react-transition-group';
//import { AiTwotoneStar } from 'react-icons/ai'
import './style.scss';

import schema from './schema-3.jpeg';
import logoTest from './logoTest.jpeg';

const Project = ({ projectsData }) => {

    let { id } = useParams();
    const monProjet = projectsData.filter( item => item.id === Number(id) );

    const { title, tags, description } = monProjet[0];
    return (
        <div className='project'>
            <div className='view'>
                <div className='left'>
                    <div className='view-content'>
                        <div className='content-logo' style={{ backgroundImage: `url(${logoTest})` }}></div>
                        <div className='content-text'>
                            <h2>{description}</h2>
                            <h3>{tags}</h3>
                            {
                                monProjet && monProjet[0].text.map( (item,i) => (
                                    item &&
                                        <p key={`${title+(i+1)}`}>{item}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='content-img' style={{ backgroundImage: `url(${schema})` }}/>
                </div>
            </div>
        </div>
    )
}

export default Project;