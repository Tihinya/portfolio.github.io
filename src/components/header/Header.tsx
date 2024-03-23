import React from 'react';
import { useState, useEffect } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import './header.css';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    // const [activeNav, setActiveNav] = useState('#home');
    // const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header');
            if (header) {
                if (window.scrollY >= 80) header.classList.add('scroll-header');
                else header.classList.remove('scroll-header');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuToggle = () => {
        setToggleMenu(!toggleMenu);
    };

    // const handleNavLinkClick = (navItem: string) => {
    //     setActiveNav(navItem);
    //     handleMenuToggle();
    // };

    return (
        <header className="header">
            <nav className="nav container">
                {/* Logo */}
                <a href="#home" className="nav__logo">
                    Tikhinya
                </a>
                <div className={`nav__menu${toggleMenu ? ' show-menu' : ''}`}>
                    <ul className="nav__list">
                        {/* About */}
                        <li className="nav__item">
                            <a href="#about" className={'nav__link'}>
                                About
                            </a>
                        </li>
                        {/* Skills */}
                        <li className="nav__item">
                            <a href="#skills" className={'nav__link'}>
                                Skills
                            </a>
                        </li>
                        {/* Projects */}
                        <li className="nav__item">
                            <a href="#portfolio" className={'nav__link'}>
                                Projects
                            </a>
                        </li>
                        {/* Contact */}
                        <li className="nav__item">
                            <a href="#contact" className={'nav__link'}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div
                    className={`nav__toggle${toggleMenu ? ' open' : ''}`}
                    onClick={handleMenuToggle}>
                    <HiOutlineMenu />
                </div>
            </nav>
        </header>
    );
}
