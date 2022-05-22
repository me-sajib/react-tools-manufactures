import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import PurchaseModal from "./PurchaseModal";
const Purchase = () => {
  const { id } = useParams();
  const { data: tool, isLoading } = useQuery(["tools", id], () =>
    fetch(`http://localhost:5000/tools/${id}`).then((res) => res.json())
  );
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="container-width">
      <div class="hero  bg-base-100 my-24">
        <div class="hero-content flex-col lg:flex-row">
          <img src={tool.image} class="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 class="text-5xl font-bold">{tool.name}</h1>
            <p class="py-6">{tool.description}</p>
            <h3 className="text-2xl font-semibold uppercase">
              price: ${tool.price}
            </h3>
            <p className="text-xl py-2">
              Minimum Order:{" "}
              <span className="text-orange-500 font-bold">
                {tool.minimumOrder}
              </span>
            </p>
            <p className="text-xl pb-4">
              Available:{" "}
              <span className="text-blue-500 font-bold">{tool.available}</span>
            </p>
            <label for="purchase-modal" class="btn modal-button">
              open modal
            </label>
          </div>
        </div>
        {/* show modal  */}
        <PurchaseModal tool={tool} />
      </div>
    </div>
  );
};

export default Purchase;
