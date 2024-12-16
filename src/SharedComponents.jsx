import React from 'react';

export const Button = ({ label, onClick }) => (
    <button
        onClick={onClick}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
    >
        {label}
    </button>
);

export const Card = ({ title, description }) => (
    <div className="border p-4 rounded shadow hover:shadow-lg transition-all">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>{description}</p>
    </div>
);
