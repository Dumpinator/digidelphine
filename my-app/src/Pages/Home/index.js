import React, { useEffect } from 'react';
import { AiTwotoneStar, AiFillCaretDown, AiFillLike } from 'react-icons/ai'
import { NavLink, Link } from 'react-router-dom';
import Projet from '../../Components/Projet';

import moi from './../../assets/moi.png';

import './style.scss';


const Home = ({ projectsData }) => {

    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 0)
    }, []);

    return (
        <div className='container'>
            <div className='section1'>
                <div className='title'>
                    <h1>Ma touche design en quelques mots
                        <span><AiFillLike /></span>
                    </h1>
                </div>
                <div className='bio'>
                    <div className='img'>
                        <div className='square3'></div>
                        <div className='square'>
                            <img src={moi} className='picture-author' alt="author" />
                        </div>
                        <div className='square2'></div>
                    </div>
                    <div className='text'>
                        <h2>Delphine Gaspar</h2>
                        <h2><span>Product Designer </span> à Paris</h2>
                        <p>Hello 👋</p>
                        <p>Moi c’est Delphine, Product Designer depuis 3 ans et basée en Ile-de-France. En janvier 2022, j’ai obtenu mon Mastère en Marketing Digital & UX Design à Hetic.</p>
                        <p>Comment je procède ? Je crée des interfaces prototypées et fonctionnelles et dont le parcours utilisateur est cohérent, intuitif et adapté aux besoins utilisateurs.</p>
                        <p>
                            J’accompagne aussi les équipes techniques dans le suivi des fonctionnalités. En mettant en place des roadmaps, en rédigeant des users stories et en procédant aux tests de déploiement.
                        </p>
                        <p>
                            Le design est pour moi un travail de cohésion, d’adaptabilité et de créativité, c’est la vision que j’en ai aujourd’hui. Une passion pour laquelle  je veux en faire mon métier 😊.
                        </p>
                        <NavLink to={'/about'}>
                            <button className='btn'>en savoir +</button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='section2'>
                <div className='title'>
                    <h1>Petit coup d’👀 sur <br /> mon expérience
                        <span><AiFillCaretDown />
                            <Link to={'/CV.pdf'} target={'_blank'} rel='noopener noreferrer'>
                                <button className='btn'>CV</button>
                            </Link>
                        </span>
                    </h1>
                </div>
            </div>
            <div className='section3'>
                <div className='projets'>
                    <h1>
                        DERNIERS PROJETS
                        <span><AiTwotoneStar /></span>
                    </h1>
                </div>
                <div className='container'>
                    {
                        projectsData && projectsData.map((project, index) => (
                            index < 3 && <Projet key={project.id} project={project} />
                        )).reverse()
                    }
                </div>
                <NavLink to={'/project'}>
                    <button className='btn'>Voir tout</button>
                </NavLink>
            </div>
            <div className='section4'>
                <div className='container'>
                    <h1 className='title'>Concrètement, où sont mes compétences ? </h1>
                    <div className='content'>
                        <div className='rond'>
                            <div className='push'>
                                <h2>UX/UI <br /> Design</h2>
                                <div className='bar'></div>
                            </div>
                            <div className='style'>
                                <h2><span>01</span> Web & <br /> Applications</h2>
                                <p>Concevoir des interfaces adaptées, intuitives pour répondre aux attentes de l’utilisateur.</p>
                            </div>
                        </div>
                        <div className='rond'>
                            <div className='push'>
                                <h2>Project <br /> Management</h2>
                                <div className='bar'></div>
                            </div>
                            <div className='style'>
                                <h2><span>02</span> Epics & <br /> Backlogs</h2>
                                <p>Rédaction des fonctionnalités et priorisation des issues Github avec l’équipe technique.</p>
                            </div>
                        </div>
                        <div className='rond'>
                            <div className='push'>
                                <h2>User <br /> Centric</h2>
                                <div className='bar'></div>
                            </div>
                            <div className='style'>
                                <h2><span>03</span> Users & <br /> prototypage</h2>
                                <p>Placer l'utilisateur au centre et lui permettre de rapidement tester les améliorations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section5'>
                <div className='container'>
                    <h1 className='title'>Apprentissage & collaborations</h1>
                    <div className='text'>
                        <p>
                            C’est à Hetic que j’ai fait mes premiers pas dans le web et développé mes compétences en design. 🙂
                        </p>
                        <p>
                            Pour mettre en pratique ce que j’ai appris, plusieurs entreprises m’ont ouvert leurs portes pour  effectuer un stage ou une alternance.
                        </p>
                        <p>
                            Chaque expérience m’a apporté quelque chose de nouveau. J’ai acquis de nouvelles compétences et pu évoluer dans le design.
                        </p>
                    </div>
                    <div className='content'>
                        <div className='rect'
                            style={{ backgroundImage: `url(/tng-min.jpg)` }}
                        > </div>
                        <div className='rect'
                            style={{ backgroundImage: `url(/soc-min.jpg)` }}
                        >
                        </div>
                        <div className='rect'
                            style={{ backgroundImage: `url(/sfas-min.jpg)` }}
                        > </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
