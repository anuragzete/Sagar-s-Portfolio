import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="about" className="py-20">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Me</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Clickable Image */}
                    <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer" onClick={() => setIsModalOpen(true)}>
                        <img
                            src="/resources/WhatsApp%20Image%202025-02-25%20at%2012.00.25%20PM.jpeg"
                            alt="Profile"
                            className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                    </div>
                    <div className="space-y-4">
                        <p className="text-gray-600 dark:text-gray-300">
                            I’m a Front Developer and a student of Computer Application, specializing in Frontend Technologies.
                            I enjoy building dynamic, scalable applications and am currently diving deeper into the React Js
                            to strengthen my Frontend expertise.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            Beyond development, I’m passionate about cybersecurity, blockchain, open-source contribution,
                            and technical writing. I love solving complex problems, optimizing performance, and staying updated
                            with emerging technologies. Contributing to open-source projects and sharing knowledge with the tech
                            community keeps me motivated.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            Let's build something amazing together! 🚀
                        </p>
                        <div className="pt-4">
                            <button
                                onClick={() => navigate('/contact')}
                                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Get in Touch
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Popup for Image */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
                    <div className="relative">
                        <button
                            className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full"
                            onClick={() => setIsModalOpen(false)}
                        >
                            ✕
                        </button>
                        <img
                            src="/resources/profilePhoto.jpg"
                            alt="Profile Enlarged"
                            className="max-w-[90vw] max-h-[90vh] rounded-lg"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
