import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Work = () => {
    return (
        <div id="section5" className="work">
            <h1 className="work__heading1">
                <span style={{ "--j": "1" }}>W</span>
                <span style={{ "--j": "2" }}>o</span>
                <span style={{ "--j": "3" }}>r</span>
                <span style={{ "--j": "4" }}>k</span>
                {/* <span style={{ "--j": "6", marginLeft: "2.5rem" }}> </span>
                <span style={{ "--j": "7" }}>E</span>
                <span style={{ "--j": "8" }}>x</span>
                <span style={{ "--j": "9" }}>p</span>
                <span style={{ "--j": "10" }}>e</span>
                <span style={{ "--j": "11" }}>r</span>
                <span style={{ "--j": "12" }}>i</span>
                <span style={{ "--j": "13" }}>e</span>
                <span style={{ "--j": "14" }}>n</span>
                <span style={{ "--j": "15" }}>c</span>
                <span style={{ "--j": "16" }}>e</span> */}
            </h1>
            <h1 className="work__heading2">02</h1>
            <div className="work__timeline">
                <section id="timeline">
                    <div className="linepart">
                        <span
                            data-date="Aug 2022 - Dec 2022"
                            className="linepart__line"
                        ></span>
                        <div class="tl-item">
                            <div
                                class="tl-bg"
                                style={{
                                    "background-image": "url(sf.jpg)",
                                    "--b": "blue",
                                }}
                            ></div>
                            <img class="tl-year" src="Coinbase.svg" alt="" />
                            {/* <div class="tl-year">
                            <p>Coinbase</p>
                        </div> */}

                            <div class="tl-content">
                                <h1>Incoming Software Engineer Intern</h1>
                                <p>San Francisco, CA</p>
                                <p>Fall 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="linepart">
                        <span
                            data-date="June 2022 - Present"
                            className="linepart__line"
                        ></span>
                        <div class="tl-item">
                            <div
                                class="tl-bg"
                                style={{
                                    "background-image": "url(cap1.jpg)",
                                }}
                            ></div>
                            <img
                                style={{
                                    "--j": "-1.5rem",
                                }}
                                class="tl-year"
                                src="Cap1.svg"
                                alt=""
                            />
                            {/* <div class="tl-year">
                            <p class="f2 heading--sanSerif">Capital One</p>
                        </div> */}

                            <div class="tl-content">
                                <h1 class="f3 text--accent ttu">
                                    Software Engineer Intern
                                </h1>
                                <p>San Francisco, CA</p>
                                <p>
                                    Digital Commerce Team @ The Lab, Summer 2022
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="linepart">
                        <span
                            data-date="Apr 2022 - Present"
                            className="linepart__line"
                        ></span>
                        <div class="tl-item">
                            <div
                                class="tl-bg"
                                style={{
                                    "background-image":
                                        "url(https://placeimg.com/803/803/nature)",
                                }}
                            ></div>
                            <img
                                style={{
                                    filter: "invert(100%)",
                                    "--j": "-4rem",
                                }}
                                class="tl-year"
                                src="overcome.png"
                                alt=""
                            />
                            {/* <div class="tl-year">
                            <p class="f2 heading--sanSerif">OverCOME Mentors</p>
                        </div> */}

                            <div class="tl-content">
                                <h1 class="f3 text--accent ttu">
                                    Technical Director
                                </h1>
                                <p>Remote</p>
                            </div>
                        </div>
                    </div>

                    <div className="linepart">
                        <span
                            data-date="Aug 2018 - Apr 2019"
                            className="linepart__line"
                        ></span>
                        <div class="tl-item">
                            <div
                                class="tl-bg"
                                style={{
                                    "background-image":
                                        "url(https://placeimg.com/800/800/nature)",
                                }}
                            ></div>
                            <img
                                style={{
                                    filter: "invert(100%)",
                                }}
                                class="tl-year"
                                src="kumon.svg"
                                alt=""
                            />
                            {/* <div class="tl-year">
                            <p class="f2 heading--sanSerif">Kumon</p>
                        </div> */}

                            <div class="tl-content">
                                <h1 class="f3 text--accent ttu">Tutor</h1>
                                <p>Fairfield, CA</p>
                                <p>
                                    Tutored middle and high school students in
                                    reading & mathematics
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="linepart">
                        <span
                            data-date="Nov 2017 - Feb 2018"
                            className="linepart__line"
                        ></span>
                        <div class="tl-item">
                            <div
                                class="tl-bg"
                                style={{
                                    "background-image":
                                        "url(https://placeimg.com/801/801/nature)",
                                }}
                            ></div>
                            <img
                                style={{
                                    "--j": "-2rem",
                                }}
                                class="tl-year"
                                src="yup.svg"
                                alt=""
                            />
                            {/* <div class="tl-year">
                            <p class="f2 heading--sanSerif">Yup</p>
                        </div> */}

                            <div class="tl-content">
                                <h1 class="f3 text--accent ttu">Tutor</h1>
                                <p>Remote</p>
                                <p>
                                    Tutored high school & college students in AP
                                    Calculus AB & BC
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="blank"></div>
        </div>
    );
};

export default Work;
