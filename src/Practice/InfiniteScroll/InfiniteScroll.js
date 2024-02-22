import React, { useEffect, useState } from "react";
import "./InfiniteScroll.css";
const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  //func for data fetch

  const fetchData = async () => {
    try {
      setLoading(true);
      const URL = `https://jsonplaceholder.typicode.com/posts?page=${page}`;

      const result = await fetch(URL);

      const incomingData = await result.json();
      setLoading(false);
      setData((prev) => [...prev, ...incomingData]);
    } catch (error) {
      setLoading(false);
      console.log("error", error.message);
    }
  };

  //func to infinite scroll
  const handelScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  //useeffect for fetchdata
  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  return (
    <section className="landingpage">
      <div className="row container">
        <h1 className="heading">Infinite Scroll</h1>
        {data &&
          data.map((item, index) => {
            return (
              <div key={index}>
                <h3> Title : {item.title}</h3>
              </div>
            );
          })}
      </div>
      {loading && <h1>...Loading</h1>}
    </section>
  );
};

export default InfiniteScroll;

// import React, { useEffect, useState } from "react";
// import "./InfiniteScroll.css";
// const InfiniteScroll = () => {
//   //states
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1);
//   //func to fetch users
//   const fetchUser = async () => {
//     try {
//       setLoading(true);
//       const URL = `https://jsonplaceholder.typicode.com/posts?page=${page}`;
//       const response = await fetch(URL);
//       const fetchedData = await response.json();
//       setData((prev) => [...prev, ...fetchedData]);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       console.log("error", error.message);
//     }
//   };

//   //func to handle scroll for infinite scroll

//   const handleScroll = () => {
//     const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
//     if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
//       setLoading(true);
//       setPage((prev) => prev + 1);
//     }
//   };

//   useEffect(() => {
//     fetchUser();
//   }, [page]);

//   //useeffetchook for calling and cleaning the handleScroll function
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <section className="landing">
//       <div className="row container">
//         <h1 className="landing_heading">Infinite Scroll</h1>
//         {data &&
//           data.map((item, index) => (
//             <div key={index} className="eachItem">
//               <h3 className="heading">Title : {item.title}</h3>
//             </div>
//           ))}
//       </div>

//       {loading && <p>...Loading</p>}
//     </section>
//   );
// };

// export default InfiniteScroll;
