import React, { useState, useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Work from './components/Work';
import Home from './components/Home';
import BackgroundColors from "./components/BackgroundColors.jsx";

export default function App() {
    const { theme } = useTheme();
    const [loading, setLoading] = useState(true);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, []);

    useEffect(() => {
        document.title = activeSection === "home"
            ? "Sagar Shelar | Home"
            : `Sagar Shelar | ${activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} `;
    }, [activeSection]);

    return (
        <>
            {loading ? (
                <LoadingScreen />
            ) : (
                <div
                    className={`relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
                >
                    <BackgroundColors/>
                    <div className="relative min-h-screen flex flex-col transition-all duration-700">
                        <Navbar setActiveSection={setActiveSection} />
                        <main className="container flex-grow mx-auto px-4 pt-20">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/work" element={<Work />} />
                                <Route path="/projects" element={<Projects />} />
                                <Route path="/skills" element={<Skills />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/about" element={<About />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </div>
            )}
        </>
    );
}
