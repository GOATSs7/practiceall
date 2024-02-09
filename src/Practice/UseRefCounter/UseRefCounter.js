import React, { useRef, useState } from "react";

const UseRefCounter = () => {
  const counterRef = useRef(0);
  const [, setRerender] = useState({});
  const handleClick = () => {
    counterRef.current += 1;
    setRerender({});
    // console.log(counterRef);
    // console.log(counterRef.current);
  };

  return (
    <div>
      <h1>{counterRef.current} </h1>

      <button onClick={() => handleClick()}> Increment</button>
    </div>
  );
};

export default UseRefCounter;
