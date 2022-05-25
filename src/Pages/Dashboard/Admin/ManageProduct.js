import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../Shared/Spinner";
import AllProduct from "./AllProduct";

const ManageProduct = () => {
  const {
    data: product,
    isLoading,
    refetch,
  } = useQuery("AllProducts", () =>
    fetch("http://localhost:5000/tools").then((res) => res.json())
  );

  if (isLoading) return <Spinner />;

  return (
    <div>
      <h2 className="text-3xl text-orange-500 uppercase py-5">
        Manage Product
      </h2>
      <table className="table w-full my-4">
        <thead>
          <tr>
            <th></th>
            <th>Tool name</th>
            <th>Price</th>
            <th>Available</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((tool, index) => (
            <AllProduct
              product={tool}
              index={index}
              key={tool._id}
              refetch={refetch}
            ></AllProduct>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;
