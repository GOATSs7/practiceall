import React, { useState } from "react";

const DigitalClock = () => {
  const time = new Date().toLocaleDateString();
  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    const time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(UpdateTime, 1000);

  return (
    <div className="container clock">
      <h1>{ctime} </h1>
    </div>
  );
};

export default DigitalClock;
