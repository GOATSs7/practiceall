import React, { useState, useEffect } from "react";
import "./ToggleTheam.css";

//
const lightTheme = {
  backgroundColor: "#fff",
  color: "#333",
};
const darkTheme = {
  backgroundColor: "#333",
  color: "#fff",
};

const ToggleTheme = () => {
  // states

  const [theme, setTheme] = useState(lightTheme);

  const themeToggle = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  // check the users preferance on  initial load

  useEffect(() => {
    const userPreferance =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme:dark)").matches;
    setTheme(userPreferance ? darkTheme : lightTheme);
  }, []);

  ///apply current theme to entire page

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      Object.keys(theme).forEach((key) => {
        body.style.setProperty(`--${key}`, theme[key]);
      });
    }
  }, [theme]);

  return (
    <section
      className="app"
      style={{ background: theme.backgroundColor, color: theme.color }}
    >
      <div className="row container">
        <h1 className="landing-heading" style={{ color: theme.color }}>
          {" "}
          Toggle Theme
        </h1>
        <button className="btn bnt-primary button" onClick={themeToggle}>
          {" "}
          toggle
        </button>
        <p className="landing-heading mt-2" style={{ color: theme.color }}>
          This is theme changer app
        </p>
      </div>
    </section>
  );
};

export default ToggleTheme;
