import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Landing1 = () => {
    return (
        <div className="landing" id="particles">
            <div></div>
            <div className="landing__main">
                <h1 className="landing__header">
                    Hi there! I'm{" "}
                    <span className="landing__header-name">Tom Zheng</span>.
                </h1>
                <h4 className="landing__description">
                    UC Berkeley undergrad & Full stack developer
                </h4>
                <a href="resume.pdf" download className="landing__button">
                    Download Resume
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
                <div className="landing__mediaicons">
                    <a
                        id="link"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/tomzheng1/"
                    >
                        <button className="landing__mediaicons-btn">
                            <i class="fab fa-linkedin-in"></i>
                        </button>
                    </a>
                    <a
                        id="link"
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/tomzheng2001"
                    >
                        <button className="landing__mediaicons-btn">
                            <i class="fab fa-github-square"></i>
                        </button>
                    </a>
                    <a
                        id="link"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.facebook.com/profile.php?id=100036140251490"
                    >
                        <button className="landing__mediaicons-btn">
                            <i class="fab fa-facebook-square"></i>
                        </button>
                    </a>
                    <a
                        id="link"
                        target="_blank"
                        rel="noreferrer"
                        href="mailto: tomzheng@berkeley.edu"
                    >
                        <button className="landing__mediaicons-btn">
                            <i class="far fa-envelope"></i>
                        </button>
                    </a>
                </div>
            </div>

            <Link
                activeClass="active"
                to="section1"
                spy={true}
                offset={visualViewport.height * -0.1}
                smooth={true}
                id="link"
                href="#scrolldown"
            >
                <button className="landing__arrow">
                    <i class="fas fa-long-arrow-alt-down"></i>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </Link>

            {/* <Background className="landing__bg" /> */}
        </div>
    );
};

export default Landing1;
