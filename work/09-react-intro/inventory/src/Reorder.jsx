import React from 'react';
import './Reorder.css';

function Reorder({ onReorder }) {
    return (
        <button onClick={onReorder} className="reorder-button fade-in">
            Reorder
        </button>
    );
}

export default Reorder;
