import React from "react";

const CategoryBtn = ({ categorybtn, filterElem }) => {
  return (
    <div>
      <div className="d-flex justify-content-center mt-3">
        <h5> Shop By Category</h5>
      </div>

      <div className="d-flex justify-content-center my-4 mx-3 ">
        <div className="btn-group">
          {categorybtn.map((elem, index) => (
            <button
              key={index}
              onClick={() => filterElem(elem)}
              className="btn btn-warning  btn-sm me-2 rounded"
            >
              {elem}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBtn;
