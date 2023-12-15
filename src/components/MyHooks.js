import React, { useState } from "react";

const MyHooks = () => {
  let myNameInitial = "Rutika ";

  const [count, setCount] = useState(0);
  const [name, setName] = useState(myNameInitial);
  const [updateName, setUpdatedName] = useState(true);

  const myName = () => {
    setName(name + "wife of Sangram chopdar ");
    setUpdatedName(false);
  };

  return (
    <>
      <div className="container">
        <h1>{name}</h1>
      </div>
      <div className="content">
        <h3>{count}</h3>

        <button
          onClick={() => {
            setCount(count + 1);

            if (updateName) {
              myName();
            }
          }}
        >
          click me
        </button>
      </div>
    </>
  );
};
export default MyHooks;
