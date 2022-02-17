import React, { useEffect } from 'react';
import { AiFillCaretDown, AiOutlineTwitter } from 'react-icons/ai'
import {  Link } from "react-router-dom";
import './style.scss';

const About = () => {

    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 0)
    }, []);

    return (
        <div className='container'>

            <div className='s1'>
                <div className='title'>
                    <h1>Je vous raconte tout ici...
                        <span><AiOutlineTwitter /></span>
                    </h1>
                </div>
                <div className='content'>
                    <div className='box' style={{ backgroundImage: `url(/image.jpeg)` }}></div>
                    <div className='box-content'></div>
                </div>
            </div>

            <div className='s2'>
                <h2 className='title'>Mon parcours 💣</h2>
                <div className='content'>
                    <h3>Reconversion professionnelle</h3>
                    <p>Après l’obtention de mon BTS carrière sociale en 2013, j’ai travaillé durant  6 ans dans différentes institutions médico-sociale. Une expérience autant  humaine que relationnelle avec la vocation d’aider un public en difficulté. J’ai accompagné différents publics :  des personnes âgées ou en situation de handicap puis des personnes en  grande précarité socio-professionnel.</p>
                    <p>Les années passent puis en 2018 une stagnation s’installe et je ne trouve plus la motivation de continuer dans ces métiers bien que humainement enrichissant. Je décide alors de repartir de zéro et de tenter l’aventure du  web.  Curieuse de découvrir toute les branches du digital pour trouver ma nouvelle profession, je décide de suivre une formation d’apprentissage intensive.</p>
                    <p>A 28 ans me voilà à nouveau sur  les bancs de l’école ! J’intègre Hetic l’école du web à Paris où je vais me former durant 3 ans dans de nombreux domaines. Je découvre le référencement, le marketing digital, le développement web ou encore le design.</p>
                </div>
            </div>

            <div className='s3'>
                <h2 className='title'>Mon cursus 🏅</h2>
                <div className='content'>
                    <h3>Une spécialisation design</h3>
                    <p>Dès le début de ma formation, je me suis  très vite passionnée pour le design et la création d’applications mobiles et web. J’ai toujours eu  envie d’évoluer dans ce domaine car je trouve challengeant le fait de proposer de nouvelles interfaces et de faire appel à mon sens créatif. J’aime aussi mettre, l’utilisateur au centre de mes projets et trouver des solutions à des problèmes existants.</p>
                    <p> Je continue de progresser en me documentant sur les nouvelles tendances UX/UI et continue de me former sur les outils tels que Figma, Adobe. Car des évolutions ne cessent d’apparaitre et tout l’enjeu est là : continuer de progresser et de suivre les changements.</p>
                </div>
            </div>

            <div className='s4'>
                <div className='title'>
                    <h1>Petit coup d’👀 sur <br/> mon expérience
                        <span><AiFillCaretDown />
                            <Link to={'/CV.pdf'} target={'_blank'} rel='noopener noreferrer'>
                                <button className='btn'>CV</button>
                            </Link>
                        </span>
                    </h1>
                </div>
            </div>

        </div>
    )
}

export default About;