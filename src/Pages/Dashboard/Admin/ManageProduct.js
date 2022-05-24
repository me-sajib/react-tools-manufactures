import React from "react";
import { useQuery } from "react-query";
import AllProduct from "./AllProduct";

const ManageProduct = () => {
  const {
    data: product,
    isLoading,
    refetch,
  } = useQuery("AllProducts", () =>
    fetch("http://localhost:5000/tools").then((res) => res.json())
  );

  if (isLoading) return <div>Loading...</div>;
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
              refetch={refetch}
            ></AllProduct>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;
