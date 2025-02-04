import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('https://api.restful-api.dev/objects')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data); 
      })
  };

  return (
    <div>
      <button onClick={fetchData}>دریافت داده</button>
      {data.length > 0 && (
        <ul>
          {data.map((item) => 
            {
                if (item.data) {
                    return (
                    <li>{item.data.color}</li>
                    )

                } else {
                    return (
                    <li>{item.name}</li>
                    ) 
                }
            }
        )
          }
        </ul>
      )}
    </div>
  );
}

export default App;
