import React, { useEffect } from 'react';
import { AiFillTool } from 'react-icons/ai'
import { NavLink } from "react-router-dom";
import './style.scss';

const Error404 = () => {

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
                    <h1>Wopsy, on dirait que cette page n'existe pas
                        <span><AiFillTool /></span>
                    </h1>
                    <NavLink to={'/'}>
                        <button className='btn'>Home</button>
                    </NavLink>
                </div>
                {/* Photo by <a href="https://unsplash.com/@diegoelbueno?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Diego González</a> on <a href="https://unsplash.com/s/photos/old-tv?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
   */}
                <div className='content'>
                    <div className='box' style={{ backgroundImage: `url(/error404.jpeg)` }}>
                        <div className="glitch-bloc">
                            <p className="invisible-text">404</p>
                            <p className="glitchedAnim">404</p>
                            <p className="glitchedAnim">404</p>
                            <p className="glitchedAnim">404</p>
                        </div>
                    </div>
                    <div className='box-content'></div>
                </div>
            </div>
        </div>
    )
}

export default Error404;