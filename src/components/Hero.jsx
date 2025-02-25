import React, { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
    const { theme } = useTheme();
    const fullText = "Sagar Shelar";
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const [showEmoji, setShowEmoji] = useState(false);

    useEffect(() => {
        if (index < fullText.length) {
            const typingInterval = setTimeout(() => {
                setText((prev) => prev + fullText[index]);
                setIndex(index + 1);
            }, 250);

            return () => clearTimeout(typingInterval);
        } else {
            setTimeout(() => setShowCursor(false), 500);
            setTimeout(() => setShowEmoji(true), 700);
            setTimeout(() => {
                setText("");
                setIndex(0);
                setShowCursor(true);
                setShowEmoji(false);
            }, 10000);
        }
    }, [index]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-14">
            <div className="text-center space-y-8">
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold">
                        Hi, I'm{" "}
                        <span className="text-blue-600 dark:text-blue-400">
                            {text}
                            {showCursor && <span className="animate-blink">|</span>}
                        </span>{" "}
                        {showEmoji && <span className="inline-block animate-waving-hand">👋</span>}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                        Frontend Developer
                    </p>
                </div>

                <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                    I specialize in Frontend development, creating robust and scalable solutions that power
                    beautiful and functional websites. Let's work together to bring your ideas to life!
                </p>

                <div className="flex justify-center space-x-4 sm:flex md:flex lg:hidden">
                    <a
                        href="https://github.com/anuragzete/"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full ${
                            theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                        } transition-colors`}
                        title="GitHub"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                    <a
                        href="https://linkedin.com/in/anurag-zete-java-developer"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full ${
                            theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                        } transition-colors`}
                        title="LinkedIn"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=anuragzete27@outlook.com"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full ${
                            theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                        } transition-colors`}
                        title="Send Email"
                    >
                        <Mail className="w-6 h-6" />
                    </a>

                </div>

                <a href="#about" className="inline-block animate-bounce">
                    <ArrowDown className="w-6 h-6" />
                </a>
            </div>
        </section>
    );
}
