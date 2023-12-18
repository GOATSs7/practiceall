import React from "react";

const CategoryBtn = ({ categorybtn, filterElem }) => {
  return (
    <div className="d-flex justify-content-center my-4 ">
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
  );
};

export default CategoryBtn;
