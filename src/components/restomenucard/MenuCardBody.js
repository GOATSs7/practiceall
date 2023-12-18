import React from "react";

const MenuCardBody = ({ item }) => {
  return (
    <>
      <div className="row row-cols-4 my-3 g-2 justify-content-center align-items-center">
        {item.map((elem) => {
          const { id, name, image, price, description } = elem;
          return (
            <div className="card col mx-2 p-0" key={id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={image} // Replace with your dish image URL
                    alt="Dish"
                    className="img-fluid rounded-start"
                  />
                </div>

                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>

                    <p className="card-text">{description}</p>

                    <p className="card-text">
                      <small className="text-muted">
                        <b>Price: {price}</b>
                      </small>
                    </p>
                    <button className="btn btn-primary">Order Now</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuCardBody;
