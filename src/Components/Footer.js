import { Link, animateScroll as scroll } from "react-scroll";


const Footer = () => {
    return (
        <div className="footer">
            <a onClick={scroll.scrollToTop} className="footer__logo">
                <h3 className="footer__logo-text">Scroll to Top</h3>
                <img src="logo1.png" alt="logo1" />
            </a>
            <div className="footer__links">
                <a href="">Github</a>
                <a href="">Linkedin</a>
                <a href="">Facebook</a>
                <a href="">Resume</a>
            </div>
            <p>Built and Designed by Tom Zheng © 2021</p>
        </div>
    )
};

export default Footer;