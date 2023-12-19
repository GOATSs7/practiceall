import React, { useState } from "react";

const ProductCard = ({ productList }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  console.log(count);
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {productList.map((elem) => (
            <div className="col" key={elem.id}>
              <div className="card h-100 mt-3">
                <img
                  src={elem.thumbnail}
                  className="card-img-top img-fluid"
                  alt={elem.title}
                  style={{ height: "200px", width: "100%", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{elem.title}</h5>
                  <p className="card-text">{elem.description}</p>
                  <div className="mt-auto">
                    <div className="price">
                      <p className="pri">Rs: {elem.price}</p>
                      <p className="discount">
                        Discount: {elem.discountPercentage} %
                      </p>
                    </div>
                    <div className="container mr-5">
                      <button className="btn btn-primary mt-2 mb-2 me-5">
                        Buy
                      </button>
                      <button
                        className="btn btn-primary mt-2 mb-2"
                        onClick={handleClick}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
