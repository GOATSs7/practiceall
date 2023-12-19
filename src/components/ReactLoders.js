import React from "react";
import { Radio } from "react-loader-spinner";
import { Bars } from "react-loader-spinner";
import { InfinitySpin } from "react-loader-spinner";
import { LineWave } from "react-loader-spinner";
import { MagnifyingGlass } from "react-loader-spinner";
import { Oval } from "react-loader-spinner";
import { Watch } from "react-loader-spinner";
const ReactLoders = () => {
  return (
    <div className="container">
      <div className="watch">
        <Watch
          height="80"
          width="80"
          radius="48"
          color="#4fa94d"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
      <div className="Radio">
        <Radio
          visible={true}
          height="80"
          width="80"
          ariaLabel="radio-loading"
          wrapperStyle={{}}
          wrapperClass="radio-wrapper"
        />
      </div>

      <div className="Bars">
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>

      <div className="spin">
        <InfinitySpin width="200" color="#5925a0" />
      </div>

      <div className="wave">
        <LineWave
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="line-wave"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          firstLineColor=""
          middleLineColor=""
          lastLineColor=""
        />
      </div>

      <div className="glasses">
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      </div>
      <div className="oval">
        <Oval
          ariaLabel="loading-indicator"
          height={100}
          width={100}
          strokeWidth={2000}
          strokeWidthSecondary={2030}
          color="blue"
          secondaryColor="Grey"
        />
      </div>
    </div>
  );
};

export default ReactLoders;
