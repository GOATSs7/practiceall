// change the text on scereen after some time without using external liabraries use only js featurs
//

import React, { useState, useEffect } from "react";

const ChangeTextOnTimer = () => {
  //states
  const [message, setMessage] = useState("Hello Sangram");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("How Are You");
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      message:{message}
      <button name="button" tooltipText="button">
        {" "}
        Button
      </button>
    </div>
  );
};

export default ChangeTextOnTimer;
