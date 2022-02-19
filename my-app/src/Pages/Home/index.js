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
                    <h1>Du design qui fait sens
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
                        <h2><span> UX Designer </span> à Paris</h2>
                        <p>Enchantée 👋 moi c’est Delphine, je pratique l’UX Design depuis 3 ans et je suis basée sur la région Ile-de-France. En janvier 2022, j’ai obtenu mon Mastère en UX Design à Hetic. Durant ma formation, j’ai découvert le travail de Designer d’interface et très vite, j’ai voulu en faire mon métier à temps plein. 😊</p>
                        <p>J’accompagne les entreprises dans la conception de leur produit. J’interviens dans la création d’un site web en partant d’une page blanche  ou sur la refonte entière ou partielle d’une application mobile, outils saas etc. Je souhaite optimiser des interfaces en proposant un design cohérent et adapté.</p>
                        <p>Mon objectif est d’intégrer l’utilisateur au centre de mes projets. J’ai appris à analyser leurs attentes et répondre à leurs besoins.</p>
                        <NavLink to={'/about'}>
                            <button className='btn'>en savoir +</button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='section2'>
                <div className='title'>
                    <h1>Petit coup d’👀 sur mon expérience
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
                <NavLink to={'/projets'}>
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
                        <p>Je remercie mon établissement Hetic pour m’avoir transmis les connaissances liées au web et de m’avoir tendu toutes les clés pour aborder cette nouvelle étape professionnelle : devenir UX designer.</p>
                        <p> Sans oublier, mon passage au sein d’entreprises expertes et où j’ai pu mettre à pratique mes compétences et acquérir des  connaissances nouvelles sur différents domaines.</p>
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