import React from 'react';
import './SelectQuality.css';

const SelectQuality = ({ streams, onQualitySelect }) => {
    return (
        <div className="quality-section">
            <h3>Select Preferred Quality:</h3>
            <div className="quality-buttons">
                {streams.map((stream, index) => (
                    <button key={index} onClick={() => onQualitySelect(index)} className="quality-button">
                        {stream[1]}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SelectQuality;
