import React, { Fragment, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_h4ke8rs",
                "template_6junicr",
                e.target,
                process.env.REACT_APP_USER_ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setSuccess(true);
                    setTimeout(() => setSuccess(false), 1000);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    return (
        <div id="section3" class="contact">
            <Fragment>
                <h1 className="contact__heading1">
                    <span style={{ "--j": "1" }}>C</span>
                    <span style={{ "--j": "2" }}>o</span>
                    <span style={{ "--j": "3" }}>n</span>
                    <span style={{ "--j": "4" }}>t</span>
                    <span style={{ "--j": "5" }}>a</span>
                    <span style={{ "--j": "6" }}>c</span>
                    <span style={{ "--j": "7" }}>t</span>
                    <span style={{ "--j": "8", marginLeft: "2.5rem" }}> </span>
                    <span style={{ "--j": "9" }}>M</span>
                    <span style={{ "--j": "10" }}>e</span>
                </h1>
                <h1 className="contact__heading2">05</h1>
            </Fragment>

            <div id="wrapper" className="wrapper">
                <span
                    style={{
                        transform: success
                            ? "translateX(0)"
                            : "translateX(100%)",
                    }}
                >
                    <h2>Message sent successfully!</h2>
                </span>
                <form className="contact__form" onSubmit={sendEmail}>
                    <h2 className="contact__heading">Send me a message!</h2>
                    <div className="contact__name">
                        <input
                            type="text"
                            class="form__input"
                            placeholder="Name"
                            id="name"
                            required
                            autocomplete="new-password"
                            name="name"
                        />
                    </div>
                    <div className="contact__email">
                        <input
                            type="email"
                            class="form__input"
                            placeholder="Email address"
                            id="email"
                            required
                            autocomplete="new-password"
                            email="email"
                        />
                    </div>
                    <div className="contact__message">
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            placeholder="Message"
                            autoComplete="off"
                        ></textarea>
                    </div>

                    <button class="contact__submit" type="submit">
                        Submit{"     "}
                        <i id="submiticon" class="fas fa-envelope-open"></i>
                    </button>
                </form>
            </div>
            <div></div>
        </div>
    );
};

export default Contact;
