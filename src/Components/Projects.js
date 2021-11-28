import React, { Fragment } from "react";
import Card from "./Card";

const Projects = () => {

    const description1 = "An image hosting site for sellers to share photos of their products and expand their business. It allows sellers to divide their albums into different categories for easier browsing and allows the seller to manage their categories and page views.";
    const description2 = "A full stack ecommerce website/template with functionalities for checkout, adding to cart, searching and sorting items, managing items, payment system, and more.";
    const description3 = "A beautiful and responsive portfolio website built using React and SCSS and hosted on github pages that showcases a variety of projects and coursework, along with information about me!";
    const description4 = "A version control system similar to Git, but on a smaller scale written for CS61B (Data Structures) that supports commits, checkouts, logs, branches, and merging";
    const description5 = "A barebones database implementation written for CS W186 (Intro to Database Systems) which supports B+ trees, joins, query optimization, concurrency, multigranularity locking, and recovery";

    return (
        <div id="section2" className="projects">
            <Fragment>
                <h1 className="projects__heading1">Projects</h1>
                <h1 className="projects__heading2">03</h1>
            </Fragment>
            <div className="projects__main">
                <Card header="4Pix" imgsrc="project1.png" description={description1} codelink="https://github.com/tomzheng2001/4Pix" sitelink="https://github.com/tomzheng2001/4Pix" />
                <Card header="Ecommerce App" imgsrc="project2.png" description={description2} codelink="https://github.com/tomzheng2001/ecommerce-app" sitelink="https://github.com/tomzheng2001/ecommerce-app" />
                <Card header="Portfolio Website" imgsrc="project3.png" description={description3} codelink="https://github.com/tomzheng2001/tomzheng2001.github.io" sitelink="https://tomzheng2001.github.io/" />
                <Card header="Gitlet" imgsrc="project4.png" description={description4} codelink="https://github.com/tomzheng2001/gitlet" sitelink="https://github.com/tomzheng2001/gitlet" />
                <Card header="RookieDB" imgsrc="project5.png" description={description5} codelink="https://github.com/tomzheng2001/RookieDB" sitelink="https://github.com/tomzheng2001/RookieDB" />
            </div>
            <div></div>
        </div>
    );
};

export default Projects;