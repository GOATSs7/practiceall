import React, { useState } from "react";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    if (email && password) {
      const newEntry = {
        id: new Date().getTime().toString(),
        email: email,
        password: password,
      };
      setAllEntry([...allEntry, newEntry]);
      setEmail("");
      setPassword("");
    } else {
      alert("please Fill Form");
    }
  };
  return (
    <>
      <div className="container mt-5">
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Your Email..."
              autoComplete="off"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              //   required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password here..."
              autoComplete="off"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              //   required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
      <div className="display">
        {allEntry.map((elem) => {
          // we can use object destructuring here // like const
          // {id,email,password}=elem
          // so insted of elem.id we can use directly id and for email and password
          return (
            <>
              <div key={elem.id}>
                <h1> {elem.email}</h1>
                <p>{elem.password} </p>
                <p>{elem.id}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default LogInForm;

// this code submit the for so we uses 3 useState func email ,password and for our data to save
// onSubmit we call submitForm fuction which helps to store and update our data
//there are some error like we here empty form is still submiting we can save this by require
// we can use required   but insted we use short-circuit here && and ||
