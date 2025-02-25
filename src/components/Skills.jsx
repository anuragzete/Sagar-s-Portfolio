import React, {useEffect, useState} from "react";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaGitAlt,
    FaJava,
    FaCuttlefish,
    FaGithub,
    FaNodeJs,
    FaMicrosoft,
} from "react-icons/fa";
import {SiTailwindcss, SiCplusplus} from "react-icons/si";

const skillCategories = {
    "Programming Languages": [
        {name: "Java", icon: <FaJava/>, level: 80, color: "#f89820"},
        {name: "C", icon: <FaCuttlefish/>, level: 60, color: "#283593"},
        {name: "C++", icon: <SiCplusplus/>, level: 65, color: "#0074B6"},
        {name: "JavaScript", icon: <FaJs/>, level: 85, color: "#F7DF1E"},
    ],
    Tools: [
        {name: "VS Code", icon: <FaMicrosoft/>, level: 85, color: "#007ACC"},
        {name: "Git", icon: <FaGitAlt/>, level: 90, color: "#F1502F"},
        {name: "GitHub", icon: <FaGithub/>, level: 90, color: "#6e5494"},
    ],
    Platforms: [
        {name: "React", icon: <FaReact/>, level: 90, color: "#61DAFB"},
        {name: "Node.js", icon: <FaNodeJs/>, level: 80, color: "#68A063"},
        {name: "HTML", icon: <FaHtml5/>, level: 90, color: "#E34F26"},
        {name: "CSS", icon: <FaCss3Alt/>, level: 80, color: "#1572B6"},
        {name: "Tailwind CSS", icon: <SiTailwindcss/>, level: 85, color: "#38B2AC"},
    ],
};

export default function Skills() {
    const [animatedLevels, setAnimatedLevels] = useState({});

    useEffect(() => {
        const timeout = setTimeout(() => {
            const newLevels = {};
            Object.keys(skillCategories).forEach((category) => {
                skillCategories[category].forEach((skill) => {
                    newLevels[skill.name] = skill.level;
                });
            });
            setAnimatedLevels(newLevels);
        }, 500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section id="skills" className="py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
                {Object.entries(skillCategories).map(([category, skills]) => (
                    <div key={category} className="mb-10">
                        <h3 className="text-2xl font-semibold mb-6">{category}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                            {skills.map((skill) => (
                                <div key={skill.name} className="flex flex-col items-center">
                                    <div className="w-24 h-24 relative">
                                        <CircularProgressbar
                                            value={animatedLevels[skill.name] || 0}
                                            text={``}
                                            styles={buildStyles({
                                                pathColor: skill.color,
                                                trailColor: "#d1d5db",
                                                strokeLinecap: "round",
                                            })}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center text-4xl"
                                             style={{color: skill.color}}>
                                            {skill.icon}
                                        </div>
                                    </div>
                                    <p className="mt-2 text-lg font-medium"
                                       style={{color: skill.color}}>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}