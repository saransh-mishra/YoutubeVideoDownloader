import React from 'react';
import myIcon1 from '/find.png';
import './SearchAndButton.css';

const SearchAndButton = ({ link, onInputChange, onButtonClick }) => {
    return (
        <div className="input-section">
            <label id="inputLabel">PASTE YOUR LINK HERE </label>
            <div style={{ position: 'relative' }}>
                <img src={myIcon1} className='findIcon' alt="FindIcon" />
                <input
                    type="text"
                    id="SearchLink"
                    placeholder="Search..."
                    value={link}
                    onChange={onInputChange}
                />
            </div>
            <button id="ConvertButton" onClick={onButtonClick}>
                Convert
            </button>
        </div>
    );
};

export default SearchAndButton;
