
/// this hook stores the data in local storage


import { useEffect, useState } from "react";


const UseLocalStorage = (key, initialValue = []) => {
  const storedData = () => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error("Error retrieving value from localStorage:", error);
      return initialValue;
    }
  };
  const [value, setValue] = useState(storedData);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error storing value in localStorage:", error);
    }
  }, [key, value]);

  return [value, setValue];
};

export default UseLocalStorage;
