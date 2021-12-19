import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { authenticate, isAuthenticated, signin } from "../auth/helper";

import Base from "../core/Base";

const Signin = () => {
  const [values, setValues] = useState({
    email: "one@dev.dev",
    password: "12345",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;

  const { user } = isAuthenticated();

  const handleChange = (name) => (event) =>
    setValues({ ...values, error: false, [name]: event.target.value });

  const onSubmit = (event) => {
    event.preventDefault();

    setValues({ ...values, error: false, loading: true });

    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({ ...values, didRedirect: true });
          });
        }
      })
      .catch((err) => console.error(err));
  };

  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={onSubmit}>
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
              <strong>Signin</strong>
            </button>
          </form>
        </div>
      </div>
    );
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const isLoading = () => {
    return (
      loading && (
        <div className="row">
          <div className="col-6 offset-3">
            <div className="alert alert-info">
              <strong>LOADING...</strong>
            </div>
          </div>
        </div>
      )
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
    <Base title="User Signin Page" description="Users can signin there...">
      {isLoading()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}
    </Base>
  );
};

export default Signin;
