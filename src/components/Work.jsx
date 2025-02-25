import React, { useEffect, useState } from "react";
import WorkExperienceCard from "./WorkExperienceCard";

const experiencesData = [
    {
        id: 1,
        job_title: "Frontend Developer Intern",
        company_name: "Cognifyz Technologies",
        company_url: "https://cognifyz.com/",
        description: [
            "Developed and maintained responsive web applications using React.js.",
            "Implemented interactive UI components with React, Tailwind CSS, and Material UI.",
            "Optimized application performance by applying best practices in frontend development.",
            "Collaborated with backend developers to integrate REST APIs efficiently.",
            "Worked with version control systems like Git and GitHub for code management.",
            "Conducted thorough testing and debugging to ensure a seamless user experience."
        ],
        technologies: ["React.js", "Tailwind CSS", "Material UI", "Git"],
        duration: {
            start: "25 December",
            end: "25 January"
        },
        location: "Nashik (Remote)"
    },
    {
        id: 2,
        job_title: "Frontend Developer Intern",
        company_name: "CodSoft IT Services",
        company_url: "https://www.codsoft.in",
        description: [
            "Designed and developed user-friendly web applications using React and JavaScript.",
            "Implemented dynamic UI elements using state management libraries like Redux.",
            "Ensured cross-browser compatibility and responsive design for all screen sizes.",
            "Collaborated with UI/UX designers to translate wireframes into functional components.",
            "Improved application performance through efficient rendering and lazy loading.",
            "Maintained detailed documentation and participated in Agile development processes."
        ],
        technologies: ["React.js", "Redux", "JavaScript", "CSS"],
        duration: {
            start: "25 January",
            end: "25 February"
        },
        location: "Nashik (Remote)"
    }
];

export default function Work() {
    const [experiences, setExperiences] = useState([]);
    const [visibleSections, setVisibleSections] = useState([]);
    const [limit, setLimit] = useState(5);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setExperiences(experiencesData);
        setLoading(false);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight * 0.6;
            setVisibleSections(
                experiences.map((_, index) => {
                    const element = document.getElementById(`experience-${index}`);
                    return element ? scrollPosition > element.offsetTop : false;
                })
            );
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [experiences]);

    const loadMore = () => {
        setLimit((prevLimit) => prevLimit + 5);
    };

    if (loading)
        return (
            <p className="text-center text-2xl font-semibold text-green-500 flex items-center justify-center h-64">
                Loading work experiences...
            </p>
        );

    if (error)
        return (
            <p className="text-center text-2xl font-semibold text-red-500 flex items-center justify-center h-64">
                Error: {error}
            </p>
        );

    if (experiences.length === 0)
        return (
            <p className="text-center text-2xl font-semibold text-gray-500 flex items-center justify-center h-64">
                Sorry, No work experience available.
            </p>
        );

    return (
        <section id="work" className="py-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Work Experience</h2>
                <div className="relative">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
                    <div className="space-y-12">
                        {experiences.slice(0, limit).map((experience, index) => (
                            <WorkExperienceCard
                                key={experience.id}
                                experience={experience}
                                index={index}
                                visible={visibleSections[index]}
                            />
                        ))}
                    </div>
                    {limit < experiences.length && (
                        <div className="text-center mt-8">
                            <button
                                onClick={loadMore}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
