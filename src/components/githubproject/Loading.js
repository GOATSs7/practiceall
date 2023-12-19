import React from "react";

import { Bars } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="Bars d-flex justify-content-center alingn-items-center loading">
      <Bars
        height="80"
        width="80"
        color="#5925a0"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
