// CurrentDateTime.js

import React, { useState, useEffect } from 'react';

const CurrtDateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-center">
     
      <p className="text-xl">{dateTime.toLocaleString()}</p>
    </div>
  );
};

export default CurrtDateTime;
