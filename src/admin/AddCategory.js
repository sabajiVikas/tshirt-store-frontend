import React, { useState } from "react";
import { Link } from "react-router-dom";

import { isAuthenticated } from "../auth/helper/";

import Base from "../core/Base";
import { createCategory } from "./helper";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const goBack = () => {
    return (
      <div>
        <Link to="/admin/dashboard" className="btn btn-outline-warning mt-3">
          <strong>ADMIN</strong>
        </Link>
      </div>
    );
  };

  const handleChange = (event) => {
    setError("");
    setName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setError("");
    setSuccess(false);

    // backend
    createCategory(user._id, token, { name })
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setError("");
          setSuccess(true);
          setName("");
        }
      })
      .catch((err) => console.error(err));
  };

  const myCategoryForm = () => {
    return (
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control my-3"
            value={name}
            onChange={handleChange}
            autoFocus
            required
            placeholder="Enter Category..."
          />
          <button className="btn btn-outline-success btn-block">
            <strong>Submit</strong>
          </button>
        </div>
      </form>
    );
  };

  const successMessage = () => {
    if (success) {
      return (
        <div className="alert alert-success mt-3 mb-0">
          <strong>category created successfully...</strong>
        </div>
      );
    }
  };

  const errorMessage = () => {
    if (error) {
      return (
        <div className="alert alert-danger mt-3 mb-0">
          <strong>{error}</strong>
        </div>
      );
    }
  };

  return (
    <Base
      title="Welcome Admin"
      description="create category here..."
      className="container bg-success my-3 py-3"
    >
      <div className="row bg-white">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {errorMessage()}
          {goBack()}
          {myCategoryForm()}
        </div>
      </div>
    </Base>
  );
};

export default AddCategory;
