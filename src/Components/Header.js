import React, {Fragment, useEffect, useState} from "react"
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {

    const [isToggle, setIsToggle] = useState(true);

    useEffect(() => {
        const hamburger = document.querySelector('.header__hamburger');
        const buttons = document.querySelector('.header__buttons');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('clicked');
            buttons.classList.toggle('open');
        });
    });

    const didToggle = () => {
        setIsToggle(!isToggle);
        const root = document.documentElement;

        if (isToggle) {
            root.style.setProperty('--main-color', '#64DFDF');
            root.style.setProperty('--secondary-color', '#6930C3');
            root.style.setProperty('--tertiary-color', '#80FFDB');
            root.style.setProperty('--quaternary-color', '#4EA8DE');
            root.style.setProperty('--quinary-color', '#7400B8');
            root.style.setProperty('--base-color', '#000');
        } else {
            root.style.setProperty('--main-color', '#720026');
            root.style.setProperty('--secondary-color', '#ff7f51');
            root.style.setProperty('--tertiary-color', '#4f000b');
            root.style.setProperty('--quaternary-color', '#ce4257');
            root.style.setProperty('--quinary-color', '#ff9b54');
            root.style.setProperty('--base-color', '#fff');
        }

    }

    return (
        <nav className="header">
            <a href="." className="header__logo">
                <img src="logo1.png" alt="logo" />
            </a>
            <div className="header__toggle">
                <input onClick={didToggle} class="tgl tgl-skewed" id="cb3" type="checkbox"/>
                <label class="tgl-btn" data-tg-off="OFF" data-tg-on="ON" for="cb3"></label>
            </div>
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
                        offset={visualViewport.height*-0.1}
                        className="header__about">About
                        <span className="span1"></span>
                        <span className="span2"></span>
                    </Link>
                    <Link activeClass="active"
                        to="section4"
                        spy={true}
                        smooth={true} 
                        offset={visualViewport.height*-0.1}
                        className="header__about">Skills
                        <span className="span1"></span>
                        <span className="span2"></span>
                    </Link>
                    <Link activeClass="active"
                        to="section2"
                        spy={true}
                        offset={visualViewport.height*-0.1}
                        smooth={true} className="header__projects">Projects
                        
                        <span className="span1"></span>
                        <span className="span2"></span>
                    </Link>
                    <Link activeClass="active"
                        to="section3"
                        spy={true}
                        offset={visualViewport.height*-0.1}
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