import React from "react";

const About = () => {

    return (
        <div id="section1" className="about">
            <h1 className="about__heading1">About Me</h1>
            <h1 className="about__heading2">01</h1>
            <div className="about__intro">
                <div id="#b" className="about__intro-text">
                    <p className="about__intro-text1">
                        Hi! My name is Tom Zheng.  I am a 20-year 
                        old university student and I enjoy designing
                        and developing things online in my spare time.
                        I began my journey into programming back in middle 
                        school when I wrote my first line of javascript after
                        looking for a way to cheat in an online game.
                    </p>
                    <p className="about__intro-text2">
                        Currently, I am in my third year at the University of
                        California, Berkeley pursuing a double major in 
                        Computer Science and Economics with an interest in software
                        engineering, cryptography, and database systems. Outside of 
                        school and programming, I enjoy working out, discovering new
                        movies, and blindfolded speedcubing.
                    </p>
                    <button className="about__more">
                        Read More <i class="fas fa-long-arrow-alt-right"></i>
                    </button>
                </div>
                <div id="#a" class="ih-item circle effect1"><a href="#">
                    <div class="spinner"></div>
                    <div class="img"><img className="about__photo" src="personalphoto.jpg" alt="photo" /> </div>
                    <div class="info">
                        <h3>Contact Me</h3>
                </div></a></div>
                
            </div>
            
        </div>
    )
};

export default About;