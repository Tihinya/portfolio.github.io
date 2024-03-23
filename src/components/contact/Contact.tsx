import React, { useRef } from "react"
import "./contact.css"
import { HiOutlineMail, HiOutlineArrowSmRight } from "react-icons/hi"
import emailjs, { EmailJSResponseStatus } from "emailjs-com"

export default function Contact() {
    const form = useRef<HTMLFormElement | null>(null)

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (form.current) {
            const result: EmailJSResponseStatus = await emailjs.sendForm(
                "service_s53x8mc",
                "template_fwq8n7v",
                form.current,
                "cXginQ40keRVEt1YV"
            )

            if (result.text === "OK") {
                // Email sent successfully, you can add your success handling logic here
                console.log("Email sent successfully")
            } else {
                // Handle the error case here
                console.error("Error sending email")
            }

            form.current.reset()
        }
    }

    return (
        <section
            className="contact section"
            id="contact">
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
                                className="contact__button">
                                Write Me{" "}
                                <HiOutlineArrowSmRight className="contact__button-icon" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">What's the project?</h3>

                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="contact__form-input"
                                placeholder="Type your name"
                            />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="contact__form-input"
                                placeholder="Type your email"
                            />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea
                                name="project"
                                cols={30}
                                rows={10}
                                className="contact__form-input"
                                placeholder="Provide some project details..."></textarea>
                        </div>

                        <button
                            type="submit" // Specify the button type as 'submit'
                            className="button button--flex">
                            Send Message{" "}
                            <HiOutlineArrowSmRight className="button__icon" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
