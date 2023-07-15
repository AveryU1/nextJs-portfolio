"use client";
import { skills } from "../../../constants";
import { motion } from "framer-motion";
import "./Skills.scss";
import Image from "next/image";
const Skills = () => {
    return (
        <div id="skills" className="app__skills">
            <h2>Skills</h2>
            <section className="app__skills__info-container">
                <motion.div className="app__skills-info">
                    {skills.map((item, index) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            whileHover={{ scale: 1.1 }}
                            key={index}
                        >
                            <Image
                                width={75}
                                height={75}
                                src={item.imgUrl}
                                alt={`${item.title}`}
                            />
                            <h4>{item.title}</h4>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    );
};

export default Skills;
