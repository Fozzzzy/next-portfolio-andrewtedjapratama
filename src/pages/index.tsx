import Head from 'next/head';
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contacts from "@/components/Contacts";
import About from "@/components/About";

const HomePage = () => {
    const [nav, setNav] = useState(false);
    const openNav = () => setNav(true);
    const closeNav = () => setNav(false);

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true, 
        });
    }, []);

    return (
        <div className="overflow-hidden">
            <Head>
                <title>Home | Andrew Tedjapratama</title>
                <link
                    rel="preload"
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    as="style"
                />
                <link
                    rel="preload"
                    href="https://fonts.googleapis.com/css2?family=Epilogue:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    as="style"
                />
            </Head>
            <div>
                {/* Nav */}
                <MobileNav nav={nav} closeNav={closeNav} />
                <Nav openNav={openNav} closeNav={closeNav} />
                
                <div className="pt-[10vh]">
                    <div id="home">
                        <Hero />
                    </div>
                    <div id="projects">
                        <Projects />
                    </div>
                    <div id="skills">
                        <Skills />
                    </div>
                    <div id="about">
                        <About />
                    </div>
                    <div id="contacts">
                        <Contacts />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
