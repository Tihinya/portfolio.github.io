import React from 'react';
import Header from "../../components/header/Header"
import Home from "../../components/home/Home"
import Skills from "../../components/skills/Skills"
import Prodjects from "../../components/projects/Projects"
import Contact from "../../components/contact/Contact"
import Footer from "../../components/footer/Footer"
import ScrollUp from "../../components/scrollup/ScrollUp"

export default function Mainpage() {
    return (
        <div>
            <Header />
            <main className="main">
                <Home />
                <Skills />
                <Prodjects />
                <Contact />
            </main>
            <Footer />
            <ScrollUp />
        </div>
    )
}
