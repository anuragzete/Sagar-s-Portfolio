import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const data = [
    {
        "category": "Web Development",
        "challenges": [
            "Implementing Interactive UI",
            "Managing user-specific data with Github Pages (Projects, Work Experience)",
            "Designing a responsive UI with Tailwind CSS"
        ],
        "description": "A sleek and dynamic portfolio showcasing my skills, projects, and work experience. Built with React, Vite, and Tailwind CSS, the portfolio integrates Firebase for real-time updates.It features a dark mode, animated UI elements, and a responsive design for seamless navigation.",
        "features": [
            "Responsive design",
            "Dark mode support"
        ],
        "index": 1,
        "learnings": [
            "Using Github Pages for real-time data management",
            "Implementing secure authentication using Firebase Authentication",
            "Working with Github Pages for managing dynamic content"
        ],
        "name": "Personal Portfolio Website",
        "project_duration": {
            "end": "2 March 2025 at 00:00:00 UTC + 5:30",
            "start": "5 January 2025 at 00:00:00 UTC + 5:30"
        },
        "status": "completed",
        "technologies": [
            "React", "Tailwind CSS", "Github Pages"
        ]
    }
];

export default function Projects() {
    const [projects, setProjects] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const projectsPerPage = 3;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalPages = Math.ceil(projects.length / projectsPerPage);
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = isMobile ? projects.slice(indexOfFirstProject, indexOfLastProject) : projects;

    if (projects.length === 0)
        return (
            <p className="text-center text-2xl font-semibold text-gray-500 absolute inset-0 flex items-center justify-center">
                Sorry, No projects available.
            </p>
        );

    return (
        <section id="projects" className="py-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentProjects.map((project) => (
                        <div key={project.index}>
                            <img src={"/resources/Screenshot 2025-02-25 140953.png"} alt={`Project: ${project.name}`} className="w-full h-auto rounded-lg shadow-md mb-4" />
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

                {isMobile && totalPages > 1 && (
                    <div className="flex justify-center mt-6 space-x-4">
                        {currentPage > 1 && (
                            <button
                                onClick={() => setCurrentPage(currentPage - 1)}
                                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                            >
                                Previous
                            </button>
                        )}
                        {currentPage < totalPages && (
                            <button
                                onClick={() => setCurrentPage(currentPage + 1)}
                                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                            >
                                Next
                            </button>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
