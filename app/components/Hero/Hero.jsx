"use client";
import React from "react";
import "./Hero.scss";
import { motion } from "framer-motion";
import { avatar } from "../../../public/assets";
import Image from "next/image";
const Hero = () => {
    return (
        <section id="hero" className="app__hero">
            <div className="app__hero-info">
                <div className="app__hero__info-left">
                    <motion.div
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 1 }}
                        className="app__hero-hero"
                    >
                        <h1>
                            Hi! My name is <br />
                            <span>Cristopher</span>
                        </h1>
                    </motion.div>
                    <article className="app__hero__typing-container">
                        <h2 className="app__hero-typing">
                            Frontend Web Developer
                        </h2>
                    </article>
                </div>

                <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 1, delayChildren: 1 }}
                    className="app__hero-profile"
                >
                    <Image
                        src={avatar}
                        width={300}
                        height={300}
                        loading="eager"
                        alt="avatar-image"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
