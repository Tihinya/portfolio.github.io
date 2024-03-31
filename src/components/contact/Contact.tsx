import React, { useState } from "react";
import "./contact.css";
import { HiOutlineMail, HiOutlineArrowSmRight } from "react-icons/hi";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";

export default function Contact() {
    const [formData, setFormData] = useState({
        from_name: "",
        email_id: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const result: EmailJSResponseStatus = await emailjs.send(
                "service_clhj798",
                "template_anvipxv",
                formData,
                "Sv2HwmG88UMm1gMRR"
            );

            if (result.text === "OK") {
                console.log("Email sent successfully");
                setFormData({ from_name: "", email_id: "", message: "" });
            } else {
                console.error("Email not sent:", result);
                // Provide user feedback about the failure
            }
        } catch (error) {
            console.error("Error sending email:", error);
            // Provide user feedback about the error
        }
    };




    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Let's Connect</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <HiOutlineMail className="contact__card-icon" />

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">
                                tikhinya.stepan@gmail.com
                            </span>

                            <a
                                href="mailto:tikhinya.stepan@gmail.com"
                                className="contact__button"
                            >
                                Write Me{" "}
                                <HiOutlineArrowSmRight className="contact__button-icon" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">What's the project?</h3>

                    <form onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input
                                type="text"
                                name="from_name"
                                value={formData.from_name}
                                onChange={handleChange}
                                className="contact__form-input"
                                placeholder="Type your name"
                            />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input
                                type="email"
                                name="email_id"
                                value={formData.email_id}
                                onChange={handleChange}
                                className="contact__form-input"
                                placeholder="Type your email"
                            />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                cols={30}
                                rows={10}
                                className="contact__form-input"
                                placeholder="Provide some project details..."
                            ></textarea>
                        </div>

                        <button type="submit" className="button button--flex">
                            Send Message{" "}
                            <HiOutlineArrowSmRight className="button__icon" />
                        </button>
                    </form>
                </div>
            </div>

        </section>
    );
};

