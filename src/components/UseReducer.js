import React, { useReducer } from "react";

const initialState = 0;

//we can pass anything as argument at state and action it is not mandetory to write state and action
// just for understanding we use state and action
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      //   to stop our counting gode to negative
      return state > 0 ? state - 1 : state;

    default:
      return state;
  }
};

const UseReducer = () => {
  //here reducer is pure function which has no any role at side effect it give same output every time
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    //bootstarp classes are added here
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <p className="display-4">{state}</p>
        <button
          className="btn btn-primary mb-3"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
        <button
          className="btn btn-danger mb-3 mx-4"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
