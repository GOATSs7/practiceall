import React from "react";

const NavbarProduct = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary ">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">
            <h2>SaRuKart </h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/"
                >
                  <h5>Home</h5>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  <h5>About</h5>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="/about">
                  <h5>Your Orders </h5>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarProduct;
