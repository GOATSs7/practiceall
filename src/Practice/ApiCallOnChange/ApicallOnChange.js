import React, { useState } from "react";

const ApicallOnChange = () => {
  const [inputValue, setInputValue] = useState("");
  const [apiData, setApiData] = useState(null);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.trim() !== "") {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        const filterdData = data.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        );
        setApiData(filterdData);
        // console.log(filterdData);
      } catch (error) {
        console.log(error.message);
        setApiData(null);
      }
    }
  };

  return (
    <div className="landing-section">
      <div className="row container">
        <div
          className="form-div"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="landing-heading">Search :</h1>

          <input
            type="text"
            name="search"
            id="searchInput"
            placeholder=" Search here"
            value={inputValue}
            onChange={handleInputChange}
            style={{ padding: "4px", margin: "10px" }}
          />
        </div>

        {apiData &&
          apiData.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="card card-wrap mb-2">
                <div className="card-body">
                  <h1 className="card-title" style={{ fontSize: 25 }}>
                    {item.name}{" "}
                  </h1>
                  <p className="card-text">{item.email}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ApicallOnChange;
