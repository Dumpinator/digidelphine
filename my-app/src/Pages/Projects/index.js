import React from 'react';
//import { CSSTransition } from 'react-transition-group';
import { AiTwotoneStar } from 'react-icons/ai'
import './style.scss';

import Projet from '../../Components/Projet';


const Projects = ({ projectsData }) => {

    return (
        <div className='container-projets'>
            <div className='projets'>
                <h1>
                    MES PROJETS
                    <span><AiTwotoneStar /></span>
                </h1>
            </div>
            <div className='container'>
                {
                    projectsData && projectsData.map( project => (
                        project && <Projet key={project.id} project={project} />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;