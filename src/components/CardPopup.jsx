import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";

export default function CardPopup({ project, isOpen, onClose }) {
    if (!project) return null;

    const formatDate = (timestamp) => {
        if (!timestamp?.seconds) return "❌ Invalid date";
        const date = new Date(timestamp.seconds * 1000);
        return date.toLocaleDateString();
    };

    return (
        <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
            <div className="relative z-50 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl w-full max-w-3xl text-gray-900 dark:text-gray-200 max-h-[90vh] overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="max-h-[80vh] overflow-y-auto pr-2 scrollbar-hide">
                        <Dialog.Title className="text-2xl font-bold">📌 {project.name}</Dialog.Title>
                        <p className="mt-2 text-gray-700 dark:text-gray-300">{project.description}</p>

                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">📂 Category</h3>
                            <p className="text-gray-700 dark:text-gray-300 pl-8">{project.category}</p>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">⏳ Project Duration</h3>
                            <p className="text-gray-700 dark:text-gray-300 pl-8">
                                {formatDate(project.project_duration?.start)} - {formatDate(project.project_duration?.end)}
                            </p>
                        </div>

                        {project.features?.length > 0 && (
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">🚀 Key Features</h3>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                                    {project.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {project.technologies?.length > 0 && (
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">🛠 Technologies Used</h3>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                                    {project.technologies.map((tech, index) => (
                                        <li key={index}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {project.challenges?.length > 0 && (
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">⚠️ Challenges Faced</h3>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                                    {project.challenges.map((challenge, index) => (
                                        <li key={index}>{challenge}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {project.learnings?.length > 0 && (
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">📚 Learnings and Takeaways</h3>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                                    {project.learnings.map((learning, index) => (
                                        <li key={index}>{learning}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {project.image_urls?.length > 0 && (
                            <div className="mt-4">
                                <h3 className="mb-3 text-lg font-semibold">🖼 Project Images</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {project.image_urls.filter(url => url).map((url, index) => (
                                        <img
                                            key={index}
                                            src={url}
                                            alt={`Project Image ${index + 1}`}
                                            className="rounded-lg shadow-md border border-gray-300 dark:border-gray-700"
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="mt-6 mb-2 flex justify-end">
                            <button onClick={onClose} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md" aria-label="Close Popup">
                                Close
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Dialog>
    );
}
