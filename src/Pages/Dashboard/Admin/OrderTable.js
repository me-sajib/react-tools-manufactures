import React from "react";

const OrderTable = ({ order, index, refetch }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{order?.email}</td>
      <td>{order?.toolName}</td>
      <td>pending</td>
      <td>
        {order?.paid ? (
          <span className="btn btn-xs btn-success"> paid</span>
        ) : (
          "unpaid"
        )}
      </td>
      <td>
        <button className="btn btn-xs btn-primary">Cancel</button>
      </td>
    </tr>
  );
};

export default OrderTable;
