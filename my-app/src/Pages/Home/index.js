import React from 'react';
//import { CSSTransition } from 'react-transition-group';
import { AiTwotoneStar, AiFillHeart, AiFillCaretDown } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Projet from '../../Components/Projet';
//import moi from './moi.png'
import socoon from './soc-min.jpg';
import fastory from './fas-min.jpg'
import theNetGroup from './tng-min.jpg'
import './style.scss';


const Home = ({ projectsData }) => {

    return (
        <div className='container'>
            <div className='section1'>
                <div className='title'>
                    <h1>Du design qui fait sens
                        <span><AiFillHeart /></span>
                    </h1>
                </div>
                <div className='bio'>
                    <div className='img'>
                        <div className='square3'></div>
                        <div className='square'>
                            {/* <img src={moi} className='test' alt="Logo" /> */}
                        </div>
                        <div className='square2'></div>
                    </div>
                    <div className='text'>
                        <h2>Delphine Gaspar</h2>
                        <h2><span> UX Designer </span> à Paris</h2>
                        <p>Enchantée 👋,  moi c’est Delphine, je suis UX Designer et prête à intégrer le marché de l’emploi dans ce domaine qui me passionne. </p>
                        <p>J’accompagne les entreprises dans la conception de leur produit. J’interviens dans la création d’un site web en partant d’une page blanche  ou sur la refonte entière ou partielle d’une application mobile, outils saas etc. Je souhaite optimiser des interfaces en proposant un design cohérent et adapté.</p>
                        <p>Mon objectif est d’intégrer l’utilisateur au centre de mes projets. J’ai appris à analyser leurs attentes et répondre à leurs besoins.</p>
                        <button className='btn'>en savoir +</button>
                    </div>
                </div>
            </div>
            <div className='section2'>
                <div className='title'>
                    <h1>Petit coup d’oeil sur mon expérience
                        <span><AiFillCaretDown />
                            <button className='btn'>CV</button>
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
                <Link to={'/projets'}>
                    <button className='btn'>Voir tout</button>
                </Link>
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
                            style={{ backgroundImage: `url(${theNetGroup})` }}
                        > </div>
                        <div className='rect'
                            style={{ backgroundImage: `url(${socoon})` }}
                        >
                        </div>
                        <div className='rect'
                            style={{ backgroundImage: `url(${fastory})` }}
                        > </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;