import React, { useEffect } from 'react';
import { AiOutlineTwitter } from 'react-icons/ai'
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

            <div className='section s1'>
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

            <div className='section s2'>
                <h2 className='title'>Mon parcours 💣</h2>
                <div className='content'>
                    <h3>Reconversion professionnelle</h3>
                    <p>
                        Suite à l’obtention de mon BTS carrière sociale en 2013, j’ai travaillé durant 6 ans dans différentes structures médico-sociales. Une expérience humainement riche dans laquelle j’ai accompagné de nombreux publics en difficulté.
                    </p>
                    <p>
                        Les années passent puis en 2018 n’étant plus en phase avec mon métier, je décide de repartir de zéro. Avec la volonté de m’ouvrir une nouvelle voie professionnelle, j’intègre une formation de 3 ans à HETIC.  A 28 ans, me voilà à nouveau sur les bancs de l’école 💼
                    </p>
                    <p>
                        Ma première année est consacrée à la découverte approfondie de différents domaines. Les bases de l’intégration, du référencement, du marketing digital ou du design sont autant de notions que j’ai acquises. Ce panel de connaissances me semble aujourd’hui nécessaire pour accompagner une entreprise vers une stratégie digitale optimale.
                    </p>
                </div>
            </div>

            <div className='section s3'>
                <h2 className='title'>Mon cursus 🏅</h2>
                <div className='content'>
                    <h3>Spécialisation design</h3>
                    <p>
                        À partir de la deuxième année  de cursus, j’ai choisi de me spécialiser en design d’interface. Ce domaine m’a rapidement plu et j’ai souhaité en faire une vocation à temps plein. Plusieurs aspects m’ont attiré :
                    </p>
                    <p>
                        Aujourd’hui, je continue de progresser. En veille constante, je m’intéresse aux tendances du moment. Je m’inspire de sites dédiés ou de vidéos spécialisées. Je me challenge en réalisant des mini-projets courts via des plateformes. Connaissez-vous The Cacatoes Theory? Cette plateforme propose du contenu adapté aux personnes qui souhaitent développer leurs compétences.
                    </p>
                    <p>
                        Grâce à cela, je continue de me former sur les bases du design et sur la maîtrise des outils  Figma ou Adobe XD. Je sors aussi de ma zone de confort en me confrontant à des niveaux de difficulté plus pousser. De par des projets personnels que des projets d’entreprises et c’est ce qui m’aide à développer mes compétences et faire évoluer mon niveau d’expertise.
                    </p>
                </div>
            </div>

            <div className='section s4'>
                <h2 className='title'>Organisation de travail</h2>
                <div className='content'>
                    <p>
                        Ma méthode de travail consiste à passer plusieurs étapes pour arriver à un produit final adapté cohérent et répondant aux besoins utilisateurs.
                    </p>
                    <h3>AUDIT</h3>
                    <p>
                        En m’appuyant sur mes connaissances en ergonomie web, j’identifie les frictions et je propose des solutions qui répondent aux normes et à la standardisation des interfaces.
                    </p>
                    <p>
                        Est-ce que le produit respecte la hiérarchie visuelle, la cohérence, la pertinence , la loi de similarité et proximité?
                    </p>
                    <h3>RECHERCHE</h3>
                    <p>
                        Je mène des interviews auprès d’utilisateurs pour identifier leurs frustrations, leurs besoins et les    freins qu’ils ont pu rencontrer durant l’expérience utilisateur, mais aussi leurs habitudes.
                    </p>
                    <p>
                        La mise en place de personas, l’emotion map, l’empathie map et la priorisation des problèmes par la méthode Kano par exemple sont les moyens de poser des constats, des hypothèses et de trouver des réponses appropriées. Ce processus permet de mieux comprendre l’expérience de nos utilisateurs et les besoins qui en découlent.
                    </p>
                    <h3>CONCEPTION</h3>
                    <p>
                        Je procède régulièrement à de la veille graphique. Je collecte les meilleures inspirations UX et UI par le biais de différents sites : Awwwards, Behance, Dribble ou sites concurrentiels.
                    </p>
                    <p>
                        La conception se traduit ensuite par la réalisation de wireframes sous Figma ou Adobe. Le prototypage permet ensuite d’animer les interfaces pour plus de compréhension et réaliser des tests utilisateurs en itérant si nécessaire.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About;