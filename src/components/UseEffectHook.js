import React, { useState, useEffect } from "react";

const UseEffectHook = () => {
  // usestate
  const [count, setCount] = useState(0);
  // useeffect
  useEffect(() => {
    if (count >= 1) {
      document.title = `chats(${count})`;
    } else {
      document.title = `chats`;
    }
  }, [count]);

  return (
    <>
      <div className="container">
        <h1>{count} </h1>
        <button
          className="btn bg-body-secondary"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click Me
        </button>
      </div>
    </>
  );
};

export default UseEffectHook;
