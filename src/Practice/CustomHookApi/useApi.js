import React, { useState, useEffect } from "react";

const useApi = () => {
  const apiURL = "https://restcountries.com/v3.1/all?fields=name";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApi = async (uri) => {
    try {
      setLoading(true);
      const result = await fetch(uri);
      const incomingData = await result.json();
      setData(incomingData);
      //   console.log(incomingData);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi(apiURL);
  }, []);

  return { data, loading, error };
};

export default useApi;
