import React, { useEffect, useState } from "react";
import "./Pagination.css";
import UseLocalStorage from "./useLocalStorage";
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [dataStorage, setDataStorage] = UseLocalStorage(["mydata", []]);
  // fetch data
  let URL = `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=5`;

  const fetchUser = async (uri) => {
    try {
      const fetchdata = await fetch(uri);
      const data = await fetchdata.json();
      const totalHeaders = fetchdata.headers.get("x-total-count");
      const totalCount = totalHeaders ? parseInt(totalHeaders, 10) : 0;
      setTotalPages(Math.ceil(totalCount / 5));
      setPosts(data);
      setDataStorage(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchUser(URL);
  }, [currentPage, URL]);

  //func
  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <div>
      <h1> this is pagination</h1>
      <div className="posts-data">
        {posts.map((post) => {
          return (
            <>
              <div>
                <div key={post.id} className="post">
                  <h1 className="title">{post.title} </h1>
                  <p>{post.body} </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div>
        <button
          className="btn btn-primary"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previus
        </button>
        <span className="page">{`Page ${currentPage} of ${totalPages}`}</span>

        <button
          className="btn btn-primary"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
