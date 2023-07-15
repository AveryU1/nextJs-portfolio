"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { navLinks } from "../../../constants";
import { logo } from "../../../public/assets";
import Image from "next/image";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [activeLink, setActiveLink] = useState("");

    const handleActiveLink = navLink => {
        setActiveLink(navLink);
    };

    return (
        <div className="app__navbar-container">
            <nav className="app__navbar">
                <motion.div
                    initial={{ x: -500, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="app__navbar-logo"
                >
                    <Image
                        src={logo}
                        width={125}
                        height={60}
                        alt="logo-image"
                        loading="eager"
                    />
                </motion.div>
                <motion.div
                    initial={{ x: 500, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <ul className="app__navbar-links">
                        {navLinks.map(navLink => (
                            <li
                                onClick={() => handleActiveLink(navLink.id)}
                                key={navLink.id}
                            >
                                <a
                                    className={`${
                                        activeLink === navLink.id
                                            ? "active-link"
                                            : ""
                                    }`}
                                    href={`#${navLink.id}`}
                                >
                                    {navLink.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
                <div className="app__navbar-menu">
                    <i
                        className="bx bx-menu"
                        onClick={() => setToggle(prev => !prev)}
                    ></i>

                    {toggle && (
                        <motion.div
                            whileInView={{ y: [-200, 0] }}
                            transition={{ duration: 0.85, ease: "easeOut" }}
                        >
                            <i
                                className="bx bx-x"
                                onClick={() => setToggle(prev => !prev)}
                            ></i>

                            <ul className="app__navbar-links">
                                {navLinks.map((navLink, index) => (
                                    <li key={navLink.id}>
                                        <a
                                            href={`#${navLink.id}`}
                                            onClick={() =>
                                                setToggle(prev => !prev)
                                            }
                                        >
                                            {navLink.title}
                                            <Image
                                                src={navLink.imgUrl}
                                                width={25}
                                                height={25}
                                                alt="navlink image"
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
