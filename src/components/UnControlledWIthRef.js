import React, { useState, useRef } from "react";

const UnControlledWIthRef = () => {
  const [show, setShow] = useState(false);
  const [mynewName, setMyNewName] = useState("");
  const myName = useRef(null);

  const submittedForm = (e) => {
    e.preventDefault();
    let newName = myName.current.value;
    const upperCase = newName.toUpperCase();
    if (newName === "") {
      alert("Please Enter The Name");
      return; // added to prevent clearing input if form is empty
    }
    setMyNewName(upperCase);
    setShow(true);
    // **Changed:** Clear input field after successful submission
    myName.current.value = "";
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center py-5">
          <div className="col-12 col-md-6">
            <form onSubmit={submittedForm}>
              <div className="form-group">
                <label htmlFor="myName" className="form-label">
                  Enter Your Name
                </label>
                <div className="d-flex">
                  <input
                    type="text"
                    id="myName"
                    ref={myName}
                    className="form-control mr-2"
                  />
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <p className={show ? "font-weight-bold mt-2" : "d-none"}>
              {show ? `Your name is ${mynewName}` : ""}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnControlledWIthRef;
