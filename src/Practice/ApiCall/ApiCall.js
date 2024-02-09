import React, { useCallback, useEffect, useState } from "react";

const ApiCall = () => {
  // api endpint uri
  const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

  //Functions
  // 1.func for api call

  const fetchApiCall = useCallback(async (uri) => {
    try {
      const res = await fetch(uri);
      const dataApi = await res.json();
      setData(dataApi);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  // states af app
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchApiCall(API_ENDPOINT);
  }, [fetchApiCall]);

  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body} </p>
          </div>
        );
      })}
    </>
  );
};

export default ApiCall;
