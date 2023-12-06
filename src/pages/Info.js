import InfoCard from'../components/InfoCard'
import React, { useEffect, useState } from 'react';


const Info = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/data')
          .then(response => response.json())
          .then(data => setData(data));
      }, []);

    return (
        <>
            <div className="app">
                <h3>'Movie Name'</h3>
                <p>
                   {data.map(item => (
                <div key={item.id}>{item.value}</div>
                ))} 
                </p>
                
                <InfoCard />
            </div>
        </>
    );
};
 
export default Info;