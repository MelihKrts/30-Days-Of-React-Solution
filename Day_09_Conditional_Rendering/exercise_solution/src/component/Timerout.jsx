import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Timerout() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            // Simulate a delay of 2 seconds (2000 milliseconds)
            setTimeout(() => {
                // Assuming the data is fetched successfully
                const fetchedData = "This is the fetched data.";
                setData(fetchedData);
                setLoading(false);
            }, 2000);
        };

        fetchData();
    }, []);

    return (
        <div>
            {loading && <p> Loading...</p>}
            {data && !loading && <p>{data}</p>}
        </div>
    )
}
