import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../Shared/Spinner";
import OrderTable from "./OrderTable";

const AllOrder = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("AllOrders", () =>
    fetch("http://localhost:5000/order", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) return <Spinner />;
  return (
    <div>
      <h2 className="text-3xl text-orange-500 uppercase py-5">
        All User order
      </h2>
      <table class="table w-full my-4">
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Tool Name</th>
            <th>Status</th>
            <th>Payment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <OrderTable
              order={order}
              key={order._id}
              index={index}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllOrder;
