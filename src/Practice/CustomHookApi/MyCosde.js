// import React, { useState } from "react";
// import useApi from "./useApi";

// const CustomHookComp = () => {
//   const { data, loading, error } = useApi();
//   const [searchedData, setSearchedData] = useState(null);
//   const [search, setSearch] = useState("");
//   if (error) {
//     return error.message;
//   }

// function for search by name  thia is my code error therows
//   const searchFunc = () => {
//     const serchedItem = data.filter((item) => item.name.common search);
//     console.log(serchedItem);
//     setSearchedData(serchedItem);
//   };

//   const searchFunc = () => {
//     const lowerCaseSearch = search.toLowerCase();
//     const filteredData = data.filter((item) =>
//       item.name.common.toLowerCase().includes(lowerCaseSearch)
//     );
//     setSearchedData(filteredData);
//   };

//   return (
//     <section className="main-page">
//       <div className="row container">
//         <div className="search">
//           <label htmlFor="search" style={{ color: "#fff" }}>
//             Search
//           </label>
//           <input
//             type="search"
//             name="search"
//             id=" search"
//             style={{ margin: "10px", padding: "5px" }}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <button onClick={searchFunc}>Search</button>
//         </div>
//         <h1 className="landing-heading" style={{ fontSize: 30 }}>
//           Data From API :
//         </h1>

//this is  my code throws error
//         {setSearchedData ? (
//           <div className="card card-wrap mb-2">
//             <div className="card-body">
//               <h1 className="card-title" style={{ fontSize: 25 }}>
//                 {searchedData}{" "}
//               </h1>
//               <p className="card-text">{searchedData}</p>
//             </div>
//           </div>
//         ) : loading ? (
//           <h1 className="landing-heading">Loading...</h1>
//         ) : (
//           data &&
//           data.map((item) => (
//             <div className="col-md-4" key={item.id}>
//               <div className="card card-wrap mb-2">
//                 <div className="card-body">
//                   <h1 className="card-title" style={{ fontSize: 25 }}>
//                     {item.name.common}{" "}
//                   </h1>
//                   <p className="card-text">{item.name.official}</p>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </section>
//   );
// };

// export default CustomHookComp;
