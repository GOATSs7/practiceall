import React, { useState } from "react";
import "./LoginAuth.css";
const LoginAuth = () => {
  //states
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const message = isLoggedIn ? "Welcome to this site" : " Please LogIn first";

  //fun
  const handleClick = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <section className="main-section">
      <div className="container">
        <div className="message">
          <h1 className="message-heading">{message} </h1>
        </div>
        <div className="login-btn">
          <button className="btn btn-primary" onClick={handleClick}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoginAuth;
