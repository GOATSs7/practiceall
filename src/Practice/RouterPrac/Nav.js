import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          {" "}
          <Link to="/stopwatch">StopWatch</Link>
        </li>
        <li>
          {" "}
          <Link to="/loginauth">Login Auth</Link>
        </li>
        <li>
          {" "}
          <Link to="/">Comp2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
