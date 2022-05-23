import React from "react";

const OrderTable = ({ order, index, refetch }) => {
  console.log(order);
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{order?.email}</td>
      <td>{order?.toolName}</td>
      <td>pending</td>
      <td>{order?.paid ? "paid" : "unpaid"}</td>
      <td>
        <button className="btn btn-xs btn-primary">Cancel</button>
      </td>
    </tr>
  );
};

export default OrderTable;
