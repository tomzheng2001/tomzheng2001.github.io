import React, { Fragment, useEffect, useState } from "react";
import Background from "./Background";
import About from "./About";
import Header from "./Header";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Loader from "./Loader";
import Landing1 from "./Landing1";
import Landing2 from "./Landing2";
import Work from "./Work";

const Landing = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);

    const changeContactPhoto = (islight) => {
        if (islight) {
            document.getElementById("wrapper").style.backgroundImage =
                'url("landscapeblue.jpg")';
        } else {
            document.getElementById("wrapper").style.backgroundImage =
                'url("landscape.jpg")';
        }
    };

    const changeLogoColor = (islight) => {
        if (islight) {
            document.getElementById("mainlogo").style.filter =
                "brightness(0) saturate(100%)";
        } else {
            document.getElementById("mainlogo").style.filter =
                "brightness(100) saturate(0%)";
        }
    };

    const changeFooterLogoColor = (islight) => {
        if (!islight) {
            document.getElementById("footerlogo").style.filter =
                "brightness(0) saturate(100%) invert(5%) sepia(75%) saturate(6574%) hue-rotate(333deg) brightness(103%) contrast(102%)";
        } else {
            document.getElementById("footerlogo").style.filter =
                "brightness(0) saturate(100%) invert(88%) sepia(20%) saturate(864%) hue-rotate(96deg) brightness(102%) contrast(102%)";
        }
    };

    return loading ? (
        <Loader loading={loading} />
    ) : (
        <Fragment>
            <Header
                ccp={changeContactPhoto}
                clc={changeLogoColor}
                cfc={changeFooterLogoColor}
            />
            <Landing2 />
            <About />
            <Work />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Landing;
