import React, { useState } from "react";
import TheamConteX from "./TheamConteX";

import UseReducer from "../UseReducer";

const TheamProvideR = () => {
  const [theam, setTheam] = useState("light");

  const toggleTheme = () => {
    setTheam((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <TheamConteX.Provider value={{ theam, toggleTheme }}>
      <UseReducer />
    </TheamConteX.Provider>
  );
};

export default TheamProvideR;
