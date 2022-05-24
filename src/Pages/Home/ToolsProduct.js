import React from "react";
import { Link } from "react-router-dom";
import "./css/Tools.css";

const ToolsProduct = ({ tools }) => {
  const { _id, name, price, description, minimumOrder, available, image } =
    tools;
  return (
    <div className="card w-96 bg-base-200 shadow-1xl">
      <figure>
        <img src={image} alt="Shoes" className="toolsImage" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{name}</h2>
        <h3 className="text-2xl font-semibold">price: ${price}</h3>
        <p className="text-xl">Available: {available}</p>
        <p className="text-xl">Minimum Order: {minimumOrder}</p>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/purchase/${_id}`} className="btn btn-primary">
            purchase
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToolsProduct;
