import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FaHamburger, FaTemperatureHigh } from 'react-icons/fa'

import './style.scss';
import { Link } from 'react-router-dom';
import Icons from '../Icons';

const Navbar = ({ summary }) => {

    const [isOpen, setIsOpen] = useState(false)
    const nodeRef = useRef(null)

    const menu = summary.map(({ section }) => <li key={`${ section }`}
        className={`menu m-${section.replaceAll(' ', '-').toLocaleLowerCase()}`}>
                <Link to={`${section.toLocaleLowerCase()}`}>{ section }</Link>
            </li> );

    return (
        <nav>
            <label htmlFor="menu-mobile" className="menu-mobile" onClick={() => setIsOpen(!isOpen)}>
                <h1>Delphine Gaspar</h1>
                <FaHamburger className={ isOpen ? 'is-open' : 'is-close' }/>
            </label>
            <input type="checkbox" id="menu-mobile" role="button" />

            <CSSTransition
                in={isOpen}
                timeout={500}
                classNames="fade"
                appear={true}
                nodeRef={nodeRef}
            >
                <div className={`list`}>
                    {
                        !isOpen &&
                        <Link to="/" className="logo-icon">
                            <div className="logo">
                                <FaTemperatureHigh />
                            </div>
                        </Link>
                    }
                    <ul>
                        { menu }
                        <li>
                            <Icons />
                        </li>
                    </ul>
                </div>
            </CSSTransition>
        </nav>
    )
}

export default Navbar;