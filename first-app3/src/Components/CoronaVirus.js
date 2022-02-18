import React, { useEffect, useState } from 'react';

function CoronaVirus() {
    const [title, setTitle] = useState("");
    const [data, setData] = useState();

    useEffect(() => {
        if(title.length === 2)  {
            const handle = setTimeout(() => {
                fetch(`https://corona-api.com/countries/${title}`)
                .then(stream => stream.json())
                .then(results => setData(results.data));
					setTitle("");
            }, 1000);

            return () => {
                clearTimeout(handle);
            };
        };
    }, [title]);

    let confirmed = "";
    let name = "";
	
    if (data !== undefined) {
        confirmed = data.latest_data.confirmed
        name = data.name;
    };

  return (
    <>
        <input type="text" value={title} onChange={(evt) => {
            setTitle(evt.target.value);
        }} />
        <h1>{name} {confirmed}</h1>
    </>
  );
};

export default CoronaVirus;