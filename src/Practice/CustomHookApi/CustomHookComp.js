import React from "react";
import useApi from "./useApi";

const CustomHookComp = () => {
  const { data, loading, error } = useApi();

  if (error) {
    return error.message;
  }

  return (
    <section className="main-page">
      <div className="row container">
        <h1 className="landing-heading" style={{ fontSize: 30 }}>
          Data From API :
        </h1>

        {loading ? (
          <h1 className="landing-heading">Loading...</h1>
        ) : (
          data &&
          data.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div class="card card-wrap mb-2">
                <div class="card-body">
                  <h1 class="card-title" style={{ fontSize: 30 }}>
                    {item.name.common}{" "}
                  </h1>
                  <p class="card-text">{item.name.official}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default CustomHookComp;
