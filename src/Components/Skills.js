import React, { Fragment } from "react"

const Skills = () => {
    return (
        <div className="skills">
            <Fragment className="skills__heading">
                <h1 className="skills__heading1">Skills & Courses</h1>
                <h1 className="skills__heading2">02</h1>
            </Fragment>
            <div className="skills__main">
                <div className="skills__main-frontend">
                    <h1 className="skills__main-frontend-text">Frontend</h1>
                    <div className="icons">
                        <i class="fab fa-js-square" id="firsticon"></i>
                        <h4>Javascript</h4>
                    </div>
                    <div className="icons">
                        <i class="fab fa-html5"></i>
                        <h4>HTML</h4>
                    </div>
                    <div className="icons">
                        <i class="fab fa-css3-alt"></i>
                        <h4>CSS</h4>
                    </div>
                    <div className="icons">
                        <i class="fab fa-sass"></i>
                        <h4>SASS</h4>
                    </div>
                    <div className="icons">
                        <i class="fab fa-react"></i>
                        <h4>React.JS</h4>
                    </div>
                    <div className="icons">
                        <i class="fab fa-react"></i>
                        <h4>React Native</h4>
                    </div>
                    <div className="icons">
                        <i class="fab fa-react"></i>
                        <h4>Next.JS</h4>
                    </div>
                    <div className="icons">
                        <i class="fab fa-react"></i>
                        <h4>Typescript</h4>
                    </div>
                    
                </div>
                <div className="skills__main-backend">
                    <h1 className="skills__main-backend-text">Backend</h1>
                    <div className="icons">
                        <i class="fab fa-node-js"></i>
                        <h4>Node.JS</h4>
                    </div>
                    <div className="icons">
                        <i class="fab fa-node-js"></i>
                        <h4>Express.JS</h4>
                    </div>
                    <div className="icons">
                        <i class="fab fa-node-js"></i>
                        <h4>Nest.JS</h4>
                    </div>
                    <div className="icons">
                        <i class="fas fa-database"></i>
                        <h4>MySQL</h4>
                    </div>
                    <div className="icons">
                        <i class="fas fa-database"></i>
                        <h4>PostgreSQL</h4>
                    </div>
                    <div className="icons">
                        <i class="fas fa-database"></i>
                        <h4>MongoDB</h4>
                    </div>
                    <div className="icons">
                        <i class="fas fa-database"></i>
                        <h4>GraphQL</h4>
                    </div>
                </div>
                <div className="skills__main-languages">
                    <h1 className="skills__main-languages-text">Other</h1>
                    <div className="icons">
                        <i class="fab fa-python" id="firsticon"></i>
                        <h4>Python</h4>
                    </div>
                    <div className="icons">
                        <i class="fab fa-java"></i>
                        <h4>Java</h4>
                    </div>
                    <div className="icons">
                        <i class="fab fa-swift"></i>
                        <h4>Swift</h4>
                    </div>
                    <div className="icons">
                        <i class="fab fa-java"></i>
                        <h4>C</h4>
                    </div>
                    <div className="icons">
                        <i class="fab fa-java"></i>
                        <h4>C#</h4>
                    </div>
                </div>
                <div className="skills__main-courses">
                    <div class="ribbon"><span>Hover for Syllabus</span></div>
                    <h1 className="skills__main-courses-text">Courses</h1>
                    <ul className="classlist">
                        <a href="https://cs61a.org/" target="_blank" rel="noreferrer" className="classlist__item">
                            <h3 className="classlist__item-header">CompSci 61A</h3>
                            <p className="classlist__item-description">Structure and Interpretation of Computer Programs</p>
                        </a>
                        <a href="https://inst.eecs.berkeley.edu/~cs61b/fa21/" target="_blank" rel="noreferrer" className="classlist__item">
                            <h3 className="classlist__item-header">CompSci 61B</h3>
                            <p className="classlist__item-description">Data Structures</p>
                        </a>
                        <a href="https://cs61c.org/fa21/" target="_blank" rel="noreferrer" className="classlist__item">
                            <h3 className="classlist__item-header">CompSci 61C</h3>
                            <p className="classlist__item-description">Great Ideas of Computer Architecture</p>
                        </a>
                        <a href="https://www.eecs70.org/" target="_blank" rel="noreferrer" className="classlist__item">
                            <h3 className="classlist__item-header">CompSci 70</h3>
                            <p className="classlist__item-description">Discrete Math and Probability</p>
                        </a>
                        <a href="https://cs170.org/" target="_blank" rel="noreferrer" className="classlist__item">
                            <h3 className="classlist__item-header">CompSci 170</h3>
                            <p className="classlist__item-description">Efficient Algorithms and Intractable Problems</p>
                        </a>
                        <a href="https://cs186berkeley.net/" target="_blank" rel="noreferrer" className="classlist__item">
                            <h3 className="classlist__item-header">CompSci W186</h3>
                            <p className="classlist__item-description">Introduction to Database Systems</p>
                        </a>
                        <a href="https://eecs16a.org/" target="_blank" rel="noreferrer" className="classlist__item">
                            <h3 className="classlist__item-header">EECS 16A</h3>
                            <p className="classlist__item-description">Designing Information Devices and Systems I</p>
                        </a>
                        <a href="https://eecs16b.org/" target="_blank" rel="noreferrer" className="classlist__item">
                            <h3 className="classlist__item-header">EECS 16B</h3>
                            <p className="classlist__item-description">Designing Information Devices and Systems II</p>
                        </a>
                    </ul>
                    <ul className="classlist">
                        <a href="https://classes.berkeley.edu/content/2021-fall-econ-1-001-lec-001" rel="noreferrer" target="_blank" className="classlist__item">
                            <h3 className="classlist__item-header">ECON 1</h3>
                            <p className="classlist__item-description">Introduction to Economics</p>
                        </a>
                        <a href="https://classes.berkeley.edu/content/2021-fall-econ-100a-001-lec-001" rel="noreferrer" target="_blank" className="classlist__item">
                            <h3 className="classlist__item-header">ECON 100A</h3>
                            <p className="classlist__item-description">Microeconomics</p>
                        </a>
                        <a href="https://eml.berkeley.edu/~olney/spring21/econ100b/" rel="noreferrer" target="_blank" className="classlist__item">
                            <h3 className="classlist__item-header">ECON 100B</h3>
                            <p className="classlist__item-description">Macroeconomics</p>
                        </a>
                        <a href="http://guide.berkeley.edu/search/?P=econ+140" target="_blank" rel="noreferrer" className="classlist__item">
                            <h3 className="classlist__item-header">ECON 140</h3>
                            <p className="classlist__item-description">Econometrics</p>
                        </a>
                        <a href="https://eml.berkeley.edu/~cbrown/e152_sp99/e152_syllabus.html" rel="noreferrer" target="_blank" className="classlist__item">
                            <h3 className="classlist__item-header">ECON 152</h3>
                            <p className="classlist__item-description">Wage Theory and Policy</p>
                        </a>
                        <a href="https://classes.berkeley.edu/content/2021-spring-econ-115-001-lec-001" rel="noreferrer" target="_blank" className="classlist__item">
                            <h3 className="classlist__item-header">ECON 115</h3>
                            <p className="classlist__item-description">The World Economy in the Twentieth Century</p>
                        </a>
                    </ul>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Skills;