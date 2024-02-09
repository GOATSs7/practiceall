// create a form with input fields(e.g name ,email, password ) and implement
//client side form validation .display error message if use enters invalid data

import React, { useState, useEffect } from "react";
import "./FormValidation.css";
const FormValidation = () => {
  //states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.title = "Form Validation";
  }, []);

  //functions

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //
  const validationForm = () => {
    let isValid = true;
    const newErrors = {};

    //name
    if (!formData.name.trim()) {
      newErrors.name = "Name is Required";
      isValid = false;
    }

    //email

    const emailRegularExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegularExp.test(formData.email)) {
      newErrors.email = "Email is not Valid";
      isValid = false;
    }

    //password

    if (!(formData.password.length >= 6)) {
      newErrors.password = "password must be at least 6 characters!";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };
  //
  const handelSubmit = (e) => {
    e.preventDefault();
    if (validationForm()) {
      console.log(formData);
    } else {
      console.log("failed to submit");
    }
  };
  //

  return (
    <div className="formSubmit">
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          id="name"
          value={formData.name}
          onChange={handelChange}
        />
        {errors.name && <span className="error"> {errors.name}</span>}
        <br />
        <input
          type="text"
          name="email"
          placeholder="email"
          id="email"
          value={formData.email}
          onChange={handelChange}
        />
        {errors.email && <span className="error"> {errors.email}</span>}
        <br />
        <input
          type="text"
          name="password"
          placeholder="password"
          id="password"
          value={formData.password}
          onChange={handelChange}
        />
        {errors.password && <span className="error"> {errors.password}</span>}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
