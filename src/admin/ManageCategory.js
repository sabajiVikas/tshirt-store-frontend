import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Base from "../core/Base";

import { isAuthenticated } from "../auth/helper";
import { deleteCategories, getCategories } from "./helper";

const ManageCategory = () => {
  const [categories, setCategories] = useState([]);

  const { user, token } = isAuthenticated();

  const removeCategories = (categoryId) => {
    deleteCategories(categoryId, user._id, token)
      .then((data) => preLoad())
      .catch((err) => console.error(err));
  };

  const preLoad = () => {
    getCategories()
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setCategories(data);
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    preLoad();
  }, []);

  return (
    <Base title="Welcome admin" description="Manage categories here">
      <h2 className="mb-4">All Categories:</h2>
      <Link className="btn btn-outline-warning" to={`/admin/dashboard`}>
        <span>ADMIN</span>
      </Link>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center text-white my-3">
            Total {categories.length} products
          </h2>
          {categories.map((cate, index) => (
            <div className="row text-center mb-2" key={index}>
              <div className="col-4">
                <h3 className="text-white text-left">{cate.name}</h3>
              </div>
              <div className="col-4">
                <button
                  onClick={() => removeCategories(cate._id)}
                  className="btn btn-outline-danger btn-block"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Base>
  );
};

export default ManageCategory;
