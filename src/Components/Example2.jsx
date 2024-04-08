import React, { useState, useEffect } from 'react';

export default function Example2() {
    const [data, setData] = useState(null);
   

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://admin.drscrubs.in/demo/api/all-tags');
            const result = await response.json();
            setData(result);
            console.log(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        fetchData();
    }, []); 
   
  return (
    <div>
        <h2>Data Fetching Example</h2>
      {data ? (
        <ul>
          {data?.data.map(item => (
            <>
            <li key={item.id}>{item.tag_eng}</li>
            
            </>
            
           
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>

  )
}
