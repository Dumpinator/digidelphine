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
                        <h2><span>Product Designer </span> à Paris</h2>
                        <p>Enchantée 👋</p>
                        <p>Moi c’est Delphine, je suis Product Design depuis 3 ans et je suis basée sur la région Ile-de-France. En janvier 2022, j’ai obtenu mon Mastère en Marketing Digital & UX Design à Hetic.</p>
                        <p>Je représente le produit final au travers de wireframes, de maquettes et d’un prototypage fonctionnel.</p>
                        <p>Au-delà du design, je peux gérer la partie management de produit. Rédiger des roadmaps, des users stories et procéder à des tests de déploiement sont des missions que j’ai déjà réalisées en tant que Product Owner. J’accompagne les entreprises dans la conception de produits digitaux. Le design est pour moi un travail de cohésion et d’adaptabilité, c’est la vision que j’en ai aujourd’hui.</p>
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
                            Grâce à Hetic, j’ai fait mes premiers pas dans le web et développé mes compétences dans le design au travers de projets réels. 🙂
                        </p>
                        <p>
                            Pour continuer de progresser, j’ai intégré plusieurs entreprises où j’ai mis en pratique mon savoir-faire et expérimenté sur le terrain, le métier de Product Designer. J’ai pris conscience que le designer  jouait un rôle important dans la réussite d’un business d’entreprise et ma présence en entreprises était challengeant et responsabilisant.
                        </p>
                        <p>
                            Tous les collaborateurs m’ont apporté quelque chose de nouveau. De par leurs expériences,  j’ai appris à travailler différemment et su profiter de leurs connaissances pour me corriger et m’améliorer en permanence.
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
