import React from "react"
import "./about.css"

export default function About() {
    return (
        <section
            className="about section"
            id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">A short introduction</span>
            <div className="about__container container ">
                <div className="about__data ">
                    <p className="about__description">
                        test
                    </p>
                </div>
            </div>
        </section>
    )
}
