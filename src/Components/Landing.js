import React from "react";
import Background from "./Background";

const Landing = () => {

    return (
        <div className="landing" id="particles">
            <script type="text/javascript" src="../Assets/tsparticles.min.js"></script>
            <h1 className="landing__header">
                Hi there! I'm <span className="landing__header-name">Tom Zheng</span>.
            </h1>
            <h4 className="landing__description">
                I'm a full stack developer & UC Berkeley undergrad.  
            </h4>
            <a href='resume.pdf' download className="landing__button">
                Download Resume
                <span></span><span></span><span></span><span></span>
            </a>
            <Background className="landing__bg" />
        </div> 
    );
};

export default Landing;