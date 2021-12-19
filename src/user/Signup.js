import React, { useState } from "react";
import { Link } from "react-router-dom";

import { signup } from "../auth/helper";

import Base from "../core/Base";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) =>
    setValues({ ...values, error: false, [name]: event.target.value });

  const onSubmit = (event) => {
    event.preventDefault();

    setValues({ ...values, error: false });

    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch((err) => console.error(err));
  };

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                value={name}
                onChange={handleChange("name")}
                className="form-control"
                placeholder="Enter Name..."
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={handleChange("email")}
                className="form-control"
                placeholder="Enter Email..."
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={handleChange("password")}
                className="form-control"
                placeholder="Enter password..."
                required
              />
            </div>
            <button className="btn btn-outline-success btn-block">
              <strong>Signup</strong>
            </button>
          </form>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-6 offset-3">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            new user account created successfully, please{" "}
            <Link to="/signin">
              <strong>signin</strong>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-6 offset-3">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base title="User Signup Page" description="Users can signup there...">
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
    </Base>
  );
};

export default Signup;
