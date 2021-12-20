import React from "react";

import { API } from "../../backend";

//

const ImgHelper = ({ product }) => {
  const imageUri = product
    ? `${API}/product/photo/${product._id}`
    : `https://images.pexels.com/photos/7775639/pexels-photo-7775639.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`;

  return (
    <div className="rounded border border-success p-2">
      <img
        src={imageUri}
        alt="cardImg"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="rounded"
      />
    </div>
  );
};

export default ImgHelper;
