"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

export default function Home() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    return (
        <main className={styles.main}>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <motion.div className="progress-bar" style={{ scaleX }} />
        </main>
    );
}
