import React, { useState } from "react";
import "./CityWeather.css";
const CityWeather = () => {
  const [city, setCity] = useState("");
  const [apiData, setApiData] = useState(null);

  const apiKey = `04af04d9c1126cce4c020a6792c042e3`;
  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      const data = await response.json();

      setApiData(data);
      //   console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  // handle keybord event
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchWeather();
    }
  };

  return (
    <seaction className="landing-section">
      <div className="row container">
        <h1 className="landing-heading">Weather App-city Weather</h1>
      </div>

      <div className="landing-form-div">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value.toLowerCase())}
          onKeyDown={handleKeyDown}
        />
        <button onClick={fetchWeather}>Get Weather</button>
      </div>

      {apiData && (
        <div>
          <h3 className="landing-sub-heading">
            City : {apiData?.name}, Country :
            {apiData.sys ? apiData.sys.country : "India"}
          </h3>
          <p className="para">Temperature : {apiData.main.temp} K</p>
          <p className="para">Weather : {apiData.weather[0].description}</p>
        </div>
      )}
    </seaction>
  );
};

export default CityWeather;
