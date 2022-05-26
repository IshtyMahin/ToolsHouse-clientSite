import React from "react";
import { Link } from "react-router-dom";

const OneTool = ({ product }) => {
  const { img, productName, description, quantity, price, minorder, _id } =
    product;
  console.log(product);
  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body h-75 items-center text-center">
        <div className="w-50 h-50">
          <img className="" src={img} alt="" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{productName} </h2>

          <p>
            <span className="text-xl ">Quantity :</span> {quantity}
          </p>
          <p>
            <span className="text-xl ">Minimum order :</span> {minorder}
          </p>
          <p>
            <span className="text-xl ">Price:</span> {price}
          </p>
          <p>
            <span className="text-xl ">Description :</span> {description}
          </p>
        </div>
        <Link to={`/product/${_id}`}>
          <button className="btn btn-xsl btn-success">Buy</button>
        </Link>
      </div>
    </div>
  );
};

export default OneTool;
