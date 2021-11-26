import React, { Fragment } from "react";
import Background from "./Background";
import About from "./About";
import Header from "./Header";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const Landing = () => {

    return (
        <Fragment>
            <div className="landing" id="particles">
                <Header />
                <script type="text/javascript" src="../Assets/tsparticles.min.js"></script>
                <div className="landing__main">
                    <h1 className="landing__header">
                        Hi there! I'm <span className="landing__header-name">Tom Zheng</span>.
                    </h1>
                    <h4 className="landing__description">
                        Full stack developer & UC Berkeley undergrad 
                    </h4>
                    <a href='resume.pdf' download className="landing__button">
                        Download Resume
                        <span></span><span></span><span></span><span></span>
                    </a>
                    <div className="landing__mediaicons">
                        <a id="link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tomzheng1/">
                            <button className="landing__mediaicons-btn">
                                <i class="fab fa-linkedin-in"></i>
                            </button>
                        </a>
                        <a id="link" target="_blank" rel="noreferrer" href="https://github.com/tomzheng2001">
                            <button className="landing__mediaicons-btn">
                                <i class="fab fa-github-square"></i>
                            </button>
                        </a>
                        <a id="link" target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100036140251490">
                            <button className="landing__mediaicons-btn">
                                <i class="fab fa-facebook-square"></i>
                            </button>
                        </a>
                        <a id="link" target="_blank" rel="noreferrer" href="mailto: tomzheng@berkeley.edu">
                            <button className="landing__mediaicons-btn">
                                <i class="far fa-envelope"></i>
                            </button>    
                        </a>
                    </div>
                </div>
                <a id="link" href="#scrolldown" >
                    <button className="landing__arrow">
                        <i class="fas fa-long-arrow-alt-down"></i>
                        <span></span><span></span><span></span><span></span>
                    </button>     
                </a>
                <Background className="landing__bg" />
            </div>
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Landing;