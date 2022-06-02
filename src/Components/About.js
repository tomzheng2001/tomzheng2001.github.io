import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const About = () => {
    return (
        <div id="section1" className="about">
            <h1 className="about__heading1">
                <span style={{ "--j": "1" }}>A</span>
                <span style={{ "--j": "2" }}>b</span>
                <span style={{ "--j": "3" }}>o</span>
                <span style={{ "--j": "4" }}>u</span>
                <span style={{ "--j": "5" }}>t</span>
                <span style={{ "--j": "6", marginLeft: "2.5rem" }}> </span>
                <span style={{ "--j": "7" }}>M</span>
                <span style={{ "--j": "8" }}>e</span>
            </h1>
            <h1 className="about__heading2">01</h1>
            <div className="about__intro">
                <div id="#b" className="about__intro-text">
                    <p className="about__intro-text1">
                        Hi! My name is Tom Zheng. I am a 20-year old university
                        student and I enjoy designing and developing things
                        online in my spare time. I began my journey into
                        programming back in middle school when I wrote my first
                        line of javascript after looking for a way to cheat in
                        an online game.
                    </p>
                    <p className="about__intro-text2">
                        Currently, I am an incoming fourth year at the
                        University of California, Berkeley pursuing a double
                        major in Computer Science and Economics with an interest
                        in software engineering, cryptography, and database
                        systems. Outside of school and programming, I enjoy
                        working out, discovering new movies, and blindfolded
                        speedcubing.
                    </p>
                    <p className="about__intro-text3">
                        I am currently looking for internship opportunities for
                        Winter 2023, Spring 2023, and Summer 2023, ideally in
                        California or remote, although I would open to
                        relocation. Hover over or tap my picture to drop me a
                        message!
                    </p>
                </div>
                <div id="#a" class="ih-item circle effect1">
                    <Link
                        activeClass="active"
                        to="section3"
                        spy={true}
                        smooth={true}
                        href="#"
                    >
                        <div class="spinner"></div>
                        <div class="img">
                            <img
                                className="about__photo"
                                src="personalphoto.jpg"
                                alt="Tom Zheng"
                            />{" "}
                        </div>
                        <div class="info">
                            <h3>Contact Me</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
