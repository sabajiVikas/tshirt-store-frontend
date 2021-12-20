import React, { useEffect, useState } from "react";
import Base from "./Base";
import Cards from "./Cards";
import { getProducts } from "./helper";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getProducts()
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setProducts(data);
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <Base
      title="TShirt Store"
      description="Welcome to Store..."
      className="container"
    >
      <div className="row text-center">
        <div className="row">
          {products.map((product, index) => {
            return (
              <div className="col-4 mb-3" key={index}>
                <Cards product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};

export default Home;
