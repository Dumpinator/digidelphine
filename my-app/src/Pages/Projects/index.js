import React, { useEffect } from 'react';
import { AiTwotoneStar } from 'react-icons/ai'
import './style.scss';

import Projet from '../../Components/Projet';


const Projects = ({ projectsData }) => {

    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 0)
    }, []);

    return (
        <div className='container-projets'>
            <div className='title'>
                <h1>
                    Mes projets
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