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


const Landing = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, [])

    return (
        loading ?  <Loader loading={loading} /> :
        <Fragment>
            <Header />
            <Landing2 />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Landing;