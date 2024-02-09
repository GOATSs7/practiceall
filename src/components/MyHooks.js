import React, { useState } from "react";

const MyHooks = () => {
  // let myNameInitial = "Saru ";

  const [count, setCount] = useState(0);
  // const [name, setName] = useState(myNameInitial);
  // const [updateName, setUpdatedName] = useState(true);

  // const myName = () => {
  //   setName(name + "wife of Sangram chopdar ");
  //   setUpdatedName(false);
  // };
  const addCount = () => {
    if (count >= 20) {
      return;
    }
    setCount(count + 1);
  };

  const removeCount = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <>
      <div className="container"></div>
      <div className="content">
        <h3>{count}</h3>

        <button
          // onClick={() => {
          //   if (updateName) {
          //     myName();
          //   }
          // }}
          onClick={addCount}
        >
          Add
        </button>
        <button onClick={removeCount}>Remove</button>
      </div>
    </>
  );
};
export default MyHooks;
