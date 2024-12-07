import React, { useState } from 'react';
import axios from 'axios';
import SearchAndButton from './SearchAndButton';
import Loader from './Loader';
import Overlay from './Overlay';
import SelectQuality from './SelectQuality';
import DownloadButton from './DownloadButton';

const FetchVideoDetails = () => {
    const [link, setLink] = useState('');
    const [videoDetails, setVideoDetails] = useState(null);
    const [selectedQuality, setSelectedQuality] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [buttonText, setButtonText] = useState(''); // State for button text

    const handleInputChange = (event) => {
        setLink(event.target.value);
    };

    const handleButtonClick = () => {
        setLoading(true);
        axios.post('http://localhost:5000/api/video-details', { link })
            .then(response => {
                setVideoDetails(response.data);
                setError(null);
                setLoading(false);
            })
            .catch(error => {
                setError(error.response?.data?.error || "An error occurred");
                setVideoDetails(null);
                setLoading(false);
            });
    };

    const handleQualitySelect = (index) => {
        setSelectedQuality(videoDetails.streams[index]);
    };

    const handleDownloadClick = () => {
        if (selectedQuality) {
            setLoading(true);
            setButtonText('Downloading...'); // Update button text to "Downloading..."
            axios.post('http://localhost:5000/api/download-video', { link, streamIndex: selectedQuality[0] }, { responseType: 'blob' })
                .then(response => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'video.mp4'); // Change filename as needed
                    document.body.appendChild(link);
                    link.click();
                    link.parentNode.removeChild(link);
                    setLoading(false);
                    setButtonText('Download'); // Reset button text to "Download"
                })
                .catch(error => {
                    setError(error.response?.data?.error || "An error occurred");
                    setLoading(false);
                    setButtonText('Something went wrong'); // Update button text to "Something went wrong"
                });
        }
    };

    return (
        <div>
            <SearchAndButton
                link={link}
                onInputChange={handleInputChange}
                onButtonClick={handleButtonClick}
            />
            {loading && <Overlay />} {/* Display overlay when loading */}
            {loading && <Loader />} {/* Display loader when loading */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {videoDetails && !loading && (
                <div>
                    <h2>{videoDetails.title}</h2>
                    <SelectQuality 
                        streams={videoDetails.streams} 
                        onQualitySelect={handleQualitySelect} 
                    />
                    {selectedQuality && (
                        <div>
                            <h3>Selected Quality:</h3>
                            <p>{selectedQuality[1]}</p>
                            <DownloadButton onClick={handleDownloadClick} text={buttonText} />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default FetchVideoDetails;
