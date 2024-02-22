import React from "react";
import LoginForm from "./LoginForm";
import "./LoginForm.css";
import { useAuth } from "../Context/AuthContext";
const Auth = () => {
  const { user, login, logout } = useAuth();

  const handleLogin = (username, password) => {
    login(username, password);
  };

  return (
    <div>
      {user ? (
        <div className="logout-div">
          <h1 className="landing-heading usernameclass">
            Welcome,{user.username}
          </h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Auth;
