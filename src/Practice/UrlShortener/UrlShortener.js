import React, { useState, useEffect } from "react";
import "./UrlShortener.css";
import axios from "axios";
const UrlShortener = () => {
  //states

  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenUrl, setShortenUrl] = useState("");

  useEffect(() => {
    document.title = "URL Shortener";
  }, []);

  //func

  const handelClick = async () => {
    try {
      const res = await axios.post(
        "https://api-ssl.bitly.com/v4/shorten",
        {
          long_url: originalUrl,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "26056714b3a840954bebecd67804a4b7b8a076e7 ",
          },
        }
      );
      setShortenUrl(res.data.id);
      setOriginalUrl("");
      console.log(res.data.id);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="landing-section">
      <div className="form-container">
        <div className="form-heading">
          <h1>URL Shortener</h1>

          <div className="form-input">
            <label htmlFor="form-inputbox">Enter URL</label>
            <input
              type="text"
              placeholder="https://example.com"
              name="form-inputbox"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
            />
          </div>
        </div>
        <button className="btn btn-primary" onClick={handelClick}>
          {" "}
          Shorten
        </button>
      </div>

      {shortenUrl && (
        <div className="shortend-output">
          <span>{shortenUrl} </span>
        </div>
      )}
    </div>
  );
};

export default UrlShortener;
