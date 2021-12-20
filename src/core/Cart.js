import React, { useEffect, useState } from "react";
import Base from "./Base";
import Cards from "./Cards";
import { loadCart } from "./helper/cartHelper";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  const loadProducts = () => {
    return (
      <div className="my-3">
        {products.map((product, index) => (
          <Cards
            product={product}
            key={product._id}
            removeFromCart={true}
            addtoCart={false}
            setReload={setReload}
            reload={reload}
          />
        ))}
      </div>
    );
  };

  const loadCheckout = () => {
    return (
      <div className="my-3">
        <button className="btn btn-outline-warning btn-block">CheckOut</button>
      </div>
    );
  };

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  return (
    <Base
      title="Welcome to cart page"
      description="product checkout page"
      className="container"
    >
      <div className="row text-center">
        <div className="col-8">{loadProducts()}</div>
        <div className="col-4">{loadCheckout()}</div>
      </div>
    </Base>
  );
};

export default Cart;
