import React from "react";
import Swal from "sweetalert2";

const OrderTable = ({ order, index, refetch }) => {
  const orderStatus = (e) => {
    e.preventDefault();
    const status = e.target.value;
    const orderId = order._id;

    // update order status api call

    fetch(
      `https://boiling-hollows-81420.herokuapp.com/order/status/${orderId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("access")}`,
        },
        body: JSON.stringify({ status }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire(
            "Status Updated!",
            "Order status has been updated.",
            "success"
          );
          refetch();
        }
      });
  };

  // delete order
  const deleteOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure want to delete this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      // is confirm button clicked
      if (result.isConfirmed) {
        fetch(`https://boiling-hollows-81420.herokuapp.com/order/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Order has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{order?.email}</td>
      <td>{order?.toolName}</td>
      <td>
        <form onChange={orderStatus}>
          <select
            className="select w-full max-w-xs select-bordered"
            name="order"
          >
            {order.status === "Pending" ? (
              <>
                <option selected disabled>
                  Pending
                </option>
                {order.paid ? <option>Shipped</option> : null}
              </>
            ) : (
              <option disabled selected>
                Shipped
              </option>
            )}
          </select>
        </form>
      </td>
      <td>
        {order?.paid ? (
          <span className="btn btn-xs btn-success"> paid</span>
        ) : (
          <span className="text-orange-500">unpaid</span>
        )}
      </td>
      <td>
        {order.paid ? (
          <button className="btn btn-xs btn-primary" disabled>
            Cancel
          </button>
        ) : (
          <button
            className="btn btn-xs btn-primary"
            onClick={() => deleteOrder(order._id)}
          >
            Cancel
          </button>
        )}
      </td>
    </tr>
  );
};

export default OrderTable;
