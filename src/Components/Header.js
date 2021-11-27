import React, {Fragment, useEffect} from "react"
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {

    useEffect(() => {
        const hamburger = document.querySelector('.header__hamburger');
        const buttons = document.querySelector('.header__buttons');

        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('clicked');
            buttons.classList.toggle('open');
        });
    });

    return (
        <nav className="header">
            <a href="." className="header__logo">
                <img src="logo1.png" alt="logo" />
            </a>
            <div id="navigation"> 
                <div className="header__hamburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="header__buttons" id="navbuttons">
                    <Link activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true} 
                        className="header__about">About
                        <span className="span1"></span>
                        <span className="span2"></span>
                    </Link>
                    <Link activeClass="active"
                        to="section2"
                        spy={true}
                        smooth={true} className="header__projects">Projects
                        <span className="span1"></span>
                        <span className="span2"></span>
                    </Link>
                    <Link activeClass="active"
                        to="section3"
                        spy={true}
                        smooth={true}  className="header__contact">Contact
                        <span className="span1"></span>
                        <span className="span2"></span>
                    </Link>
                </div>

                
            </div>
            
        </nav>
    )
}

export default Header;