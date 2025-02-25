import React, { useState } from 'react';
import { Github, ExternalLink, CheckCircle, Calendar, RefreshCcw } from 'lucide-react';
import CardPopup from "./CardPopup";

const isValidUrl = (url) => {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
};

export default function ProjectCard({ project }) {
    const [isPopupOpen, setPopupOpen] = useState(false);

    return (
        <>
            <div
                className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2
                bg-white dark:bg-gray-800 hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]
                cursor-pointer w-[362px] h-[462px] p-4 sm:p-5 space-y-4"
                onClick={() => setPopupOpen(true)}
            >

                {project.image_urls?.[0] && (
                    <img
                        src={project.image_urls[0]}
                        alt={project.name || 'Project Image'}
                        className="w-full h-[210px] object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl"
                    />
                )}

                {(project.status || project.durationText) && (
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 mt-2">
                        {project.status && (
                            <div className="flex items-center space-x-2">
                                {project.status.toLowerCase() === 'completed' ? (
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                ) : project.status.toLowerCase() === 'in_progress' ? (
                                    <RefreshCcw className="w-4 h-4 text-yellow-500 animate-spin" />
                                ) : (
                                    <Info className="w-4 h-4 text-gray-500" />
                                )}
                                <span>{project.status}</span>
                            </div>
                        )}

                        {project.durationText && (
                            <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4 text-blue-500" />
                                <span>{project.durationText}</span>
                            </div>
                        )}
                    </div>
                )}

                <div className="space-y-3">
                    {project.name && (
                        <h3 className="text-lg font-semibold group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                            {project.name}
                        </h3>
                    )}
                    {project.description && (
                        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 overflow-hidden">
                            {project.description}
                        </p>
                    )}
                </div>

                {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.map((tech, index) => (
                            <span key={index}
                                  className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex space-x-4 pt-4">
                    {isValidUrl(project.githubLink) && (
                        <a
                            href={project.githubLink}
                            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <Github className="w-5 h-5" />
                            <span>Code</span>
                        </a>
                    )}
                    {isValidUrl(project.link) && (
                        <a
                            href={project.link}
                            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <ExternalLink className="w-5 h-5" />
                            <span>Live Demo</span>
                        </a>
                    )}
                </div>
            </div>

            {isPopupOpen && <CardPopup project={project} isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />}
        </>
    );
};
