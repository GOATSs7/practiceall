import React, { useState } from "react";
import "./LoginForm.css";
const LoginForm = ({ onLogin }) => {
  //states for form
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    onLogin(username, password);
  };

  return (
    <>
      <section className="landing_section">
        <div className="row-container">
          <div className="landing-form-div">
            <input
              type="text"
              placeholder="Enter Your Name Here"
              name="name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter Your Password Here"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>Submit</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
