import React from "react"
import "./projects.css"
import { HiOutlineArrowSmRight } from "react-icons/hi"
import mainImage from "../../assets/main.jpeg"



export default function Projects() {
    return (
        <section
        className="portfolio section"
        id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Recent Projects</span>
            <div className="project__container container">
                <div className="project__card grid">
                    <div>
                        <img
                            className="project__img"
                            src={mainImage}
                        />
                        <h3 className="project__title">Forum</h3>
                        <a className="project__button" href="https://ec2-51-20-1-125.eu-north-1.compute.amazonaws.com:3000/">
                            Demo
                            <HiOutlineArrowSmRight className="project__button-icon" />
                        </a>
                    </div>
                    <div className="project__description">
                        As a member of a four-person team, within which we
                        employed Golang, JavaScript, and TypeScript, we designed
                        and implemented a forum using our self-developed
                        framework. Created the database design with migration
                        capabilities, developed the data flow for the project,
                        and wrote a significant portion of both the backend
                        (using Go) and the frontend (using a self-authored
                        framework in JavaScript).
                    </div>
                </div>
            </div>
        </section>
    )
}
