import React, { useState, useEffect } from "react";

const UseEffectCleanUpFunc = () => {
  const [windowWidth, setWindowWidth] = useState(window.screen.width);

  const actualWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", actualWidth);

    //cleanup function that clear our memory where the addevantlisner is stored on every call
    return () => {
      window.removeEventListener("resize", actualWidth);
    };
  });

  return (
    <>
      <p>width of Window is</p>
      <h2>{windowWidth} </h2>
    </>
  );
};

export default UseEffectCleanUpFunc;
