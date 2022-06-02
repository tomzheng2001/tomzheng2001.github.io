import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {
    return (
        <div className="footer">
            <a onClick={scroll.scrollToTop} className="footer__logo">
                <h3 className="footer__logo-text">Scroll to Top</h3>
                <img src="logo1.png" alt="Tom Zheng" id="footerlogo" />
            </a>
            <div className="footer__links">
                <a
                    href="https://github.com/tomzheng2001"
                    target="_blank"
                    rel="noreferrer"
                >
                    Github
                </a>
                <a
                    href="https://www.linkedin.com/in/tomzheng1/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Linkedin
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=100036140251490"
                    target="_blank"
                    rel="noreferrer"
                >
                    Facebook
                </a>
                <a href="resumeJune.pdf" download>
                    Resume
                </a>
            </div>
            <p>Built and Designed by Tom Zheng © 2021</p>
        </div>
    );
};

export default Footer;
