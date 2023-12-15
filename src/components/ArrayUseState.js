import React, { useState } from "react";

const ArrayUseState = () => {
  const MyArray = [
    {
      id: 0,
      name: "sangram",
      age: "26",
    },
    {
      id: 1,
      name: "rutika",
      age: "22",
    },
    {
      id: 2,
      name: "varsha",
      age: "32",
    },
    {
      id: 3,
      name: "vaibhav",
      age: "25",
    },
    {
      id: 4,
      name: "atish",
      age: "23",
    },
    {
      id: 5,
      name: "siddhesh",
      age: "21",
    },
  ];
  const [data, setData] = useState(MyArray);

  const clearData = () => {
    return setData([]);
  };

  const RemoveElem = (id) => {
    const myNewArray = data.filter((elem) => {
      return elem.id !== id;
    });
    setData(myNewArray);
  };

  return (
    <>
      {data.map((elem) => {
        return (
          <h2 className="container" key={elem.id}>
            Name:{elem.name} Age:{elem.age}
            <button
              className="btn bg-danger"
              onClick={() => RemoveElem(elem.id)}
            >
              Remove
            </button>
          </h2>
        );
      })}

      <button onClick={clearData} className="btn bg-success">
        clear All
      </button>
    </>
  );
};

export default ArrayUseState;
