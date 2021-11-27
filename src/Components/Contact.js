import React, { Fragment, useState } from "react";
import emailjs from "emailjs-com";
import { Opacity } from "tsparticles/Options/Classes/Particles/Opacity/Opacity";

const Contact = () => {
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_h4ke8rs",
                "template_6junicr",
                e.target,
                "user_NQOvtHuF2UwMzW5JzaScb"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setSuccess(true);
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
                <h1 className="contact__heading1">Contact Me</h1>
                <h1 className="contact__heading2">04</h1>
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
                    <h2 className="contact__heading">Send me an message!</h2>
                    <div className="contact__name">
                        <input
                            type="text"
                            class="form__input"
                            placeholder="Name"
                            id="name"
                            required
                            autoComplete="off"
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
                            autoComplete="off"
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
