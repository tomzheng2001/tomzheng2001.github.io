import React, { Fragment } from "react";

const Contact = () => {
    return (
        <div class="contact">
            <Fragment>
                <h1 className="contact__heading1">Contact Me</h1>
                <h1 className="contact__heading2">04</h1>
            </Fragment>
            <div className="wrapper">
                <form
                    action="mailto:tomzheng@berkeley.edu"
                    className="contact__form"
                    method="POST"
                    encType="multipart/form-data"
                >
                    <h2 className="contact__heading">Send me an message!</h2>
                    <div className="contact__name">
                        <input
                            type="text"
                            class="form__input"
                            placeholder="Name"
                            id="name"
                            required
                            autoComplete="off"
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
                        />
                    </div>
                    <div className="contact__message">
                        <textarea
                            name=""
                            id="message"
                            cols="30"
                            rows="10"
                            placeholder="Message"
                            autoComplete="off"
                        ></textarea>
                    </div>

                    <button class="contact__submit">
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
