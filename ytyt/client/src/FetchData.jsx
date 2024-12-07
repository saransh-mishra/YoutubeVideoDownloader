import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FetchVideoDetails'

const FetchData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/data')
            .then(response => {
                setData(response.data.message);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    return (
        <div>
            <h1>{data ? data : "Loading..."}</h1>
        </div>
    );
};

export default FetchData;
