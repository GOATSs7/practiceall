import React from "react";
import "./App.css";
import GitHubProject from "./components/githubproject/GitHubProject";
import UnControlledWIthRef from "./components/UnControlledWIthRef";
const App = () => {
  return (
    <>
      <div className="container">
        <GitHubProject />
        <UnControlledWIthRef />
      </div>
    </>
  );
};

export default App;
