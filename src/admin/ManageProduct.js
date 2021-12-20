import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";

import Base from "../core/Base";
import { deleteProduct, getProducts } from "./helper";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);

  const { user, token } = isAuthenticated();

  const preLoad = () => {
    getProducts()
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setProducts(data);
        }
      })
      .catch((err) => console.error(err));
  };

  const removeProduct = (productId) => {
    deleteProduct(productId, user._id, token)
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          preLoad();
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    preLoad();
  }, []);

  return (
    <Base title="Welcome Admin" description="update/delete products here...">
      <h2 className="mb-4">All products:</h2>
      <Link className="btn btn-outline-warning" to={`/admin/dashboard`}>
        <span>
          <strong>ADMIN</strong>
        </span>
      </Link>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center text-white my-3">
            Total {products.length} products
          </h2>
          {products.map((prod, index) => (
            <div className="row text-center mb-2" key={index}>
              <div className="col-4">
                <h3 className="text-white text-left">{prod.name}</h3>
              </div>
              <div className="col-4">
                <Link
                  className="btn btn-outline-success btn-block"
                  to={`/admin/product/update/${prod._id}`}
                >
                  <span>Update</span>
                </Link>
              </div>
              <div className="col-4">
                <button
                  onClick={() => removeProduct(prod._id)}
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

export default ManageProduct;
