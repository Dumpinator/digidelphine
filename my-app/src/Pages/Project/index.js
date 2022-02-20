import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from "react-router-dom";
import './style.scss';


const Project = ({ projectsData }) => {

    const limit = projectsData.length;
    let { id } = useParams();
    const monProjet = projectsData.filter( item => item.id === Number(id) );
    const [hoverL, setHoverL] = useState(false);
    const [hoverR, setHoverR] = useState(false);
    const [next, setNext] = useState(1);
    const [prev, setPrev] = useState(limit);

    const { title, tags, description, schema, logo, colors, text, board} = monProjet[0];

    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 0)

        function testNext(id) {
            if (Number(id) === limit) {
                return 1;
            } else {
                return Number(id)+1;
            }
        }

        function testPrev(id) {
            if (Number(id) === 1) {
                return limit;
            } else {
                return Number(id) - 1;
            }
        }

        setNext(testNext(id));
        setPrev(testPrev(id));
    }, [id, limit]);

    return (
        <div className='project' style={{ backgroundColor: `${colors[0]}` }}>
            <div className='view'>
                <div className='left'>
                    <div className='view-content'>
                        <div className='content-logo' style={{ backgroundImage: `url(${logo})` }}></div>
                        <div className='content-text'>
                            <h2>{description}</h2>
                            <h3>{tags}</h3>
                            {
                                text && text.map( ( item, i ) => (
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
            <div className='board'>
                <img src={board} alt='img'/>
            </div>
            <div className='swith' style={{ backgroundColor: `${colors[0]}` }}>
                <NavLink to={`/projets/${prev}`}>
                    <button className='btn prev'
                        style={hoverL ? { backgroundColor: `${colors[1]}` } : null}
                        onMouseEnter={() => setHoverL(true)}
                        onMouseLeave={() => setHoverL(false)}
                    > ⇤ PRECEDENT </button>
                    <div className='tips tips-left' style={{ backgroundColor: `${colors[1]}` }}></div>
                </NavLink>

                <NavLink to={`/projets/${next}`}>
                    <button className='btn next'
                        style={hoverR ? { backgroundColor: `${colors[1]}` } : null}
                        onMouseEnter={() => setHoverR(true)}
                        onMouseLeave={() => setHoverR(false)}
                    > SUIVANT ⇥ </button>
                    <div className='tips tips-right' style={{ backgroundColor: `${colors[1]}` }}></div>
                </NavLink>
            </div>
        </div>
    )
}

export default Project;