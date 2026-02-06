import React from 'react';

export const Loading: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                <p className="text-gray-600 text-lg">Loading...</p>
            </div>
        </div>
    );
};

export default Loading;