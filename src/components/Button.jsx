import React from 'react';

const Button = ({ label, onClick, onKeyDown, className = '' }) => {
    return (
        <button 
            className={`btn ${className} mb-5 gap-x-2 justify-center h-16 ${className.includes('w-10') ? 'w-10' : 'w-16'}`}
            onClick={() => onClick(label)}
            onKeyDown={onKeyDown ? (event) => onKeyDown(event) : undefined}
        >
            {label}
        </button>
    );
};

export default Button;
