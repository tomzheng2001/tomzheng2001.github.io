import React from "react"

const Header = () => {
    return (
        <nav className="header">
            <a href="." className="header__logo">
                <img src="logo1.png" alt="logo" />
            </a>
            <div className="header__buttons">
                <a href="#" className="header__about">About
                    <span className="span1"></span>
                    <span className="span2"></span>
                </a>
                <a href="#" className="header__projects">Projects
                    <span className="span1"></span>
                    <span className="span2"></span>
                </a>
                <a href="#" className="header__contact">Contact
                    <span className="span1"></span>
                    <span className="span2"></span>
                </a>
            </div>
        </nav>
    )
}

export default Header;