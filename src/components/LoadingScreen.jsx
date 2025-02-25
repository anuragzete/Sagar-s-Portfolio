import React, { useState, useEffect } from 'react';

export default function LoadingScreen() {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
        }, 500); // Change dot every 500ms
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col items-center justify-center space-y-4">
            <div className="text-6xl font-extrabold text-blue-600 dark:text-blue-400 transition-all duration-300">
                Loading<span>{dots}</span>
            </div>

            <div className="text-lg md:text-2xl font-medium text-gray-600 dark:text-gray-400 animate-bounce opacity-80">
                some cool stuff!
            </div>
        </div>
    );
}
