import React from "react";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import Spinner from "../../Shared/Spinner";

const OrderTable = ({ order, index, refetch }) => {
  const { data: status, isLoading } = useQuery("status", () =>
    fetch("http://localhost:5000/order", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) return <Spinner />;

  const orderStatus = (e) => {
    e.preventDefault();
    const status = e.target.value;
    const orderId = order._id;
    console.log(status);
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
        fetch(`http://localhost:5000/order/${id}`, {
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
          <select class="select w-full max-w-xs select-bordered" name="order">
            {status.map((status) =>
              status.status === "Pending" ? (
                <>
                  <option selected disabled>
                    Pending
                  </option>
                  <option>Shifted</option>
                </>
              ) : (
                <option selected disabled>
                  Shifted
                </option>
              )
            )}
          </select>
        </form>
      </td>
      <td>
        {order?.paid ? (
          <span className="btn btn-xs btn-success"> paid</span>
        ) : (
          "unpaid"
        )}
      </td>
      <td>
        <button
          className="btn btn-xs btn-primary"
          onClick={() => deleteOrder(order._id)}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default OrderTable;
