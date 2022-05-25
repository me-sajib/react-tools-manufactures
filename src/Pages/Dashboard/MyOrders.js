import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.config";
import Spinner from "../Shared/Spinner";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, uLoading] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`https://boiling-hollows-81420.herokuapp.com/order/${user.email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setOrders(data);
          setLoading(false);
        });
    }
  }, [user]);

  const cancelOrder = (id) => {
    // show confirm
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure want to cancel this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      // is confirm button clicked
      if (result.isConfirmed) {
        // cancel order api call
        fetch(`https://boiling-hollows-81420.herokuapp.com/order/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("access")}`,
          },
          body: JSON.stringify({ id }),
        })
          .then((res) => res.json())
          .then((data) => {
            // if order is cancelled successfully
            if (data.deletedCount) {
              Swal.fire(
                "Cancelled!",
                "Your order has been cancelled.",
                "success"
              );
              setOrders(orders.filter((order) => order._id !== id));
            }
          });
      }
    });
  };
  return (
    <div>
      <h2 className="text-3xl py-5 font-bold">Order Summery</h2>

      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Tools</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Pay</th>
                <th>Status</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {(loading || uLoading) && <Spinner />}
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.toolName}</td>
                  <td>${order.toolPrice}</td>
                  <td>{order.orderQuantity}</td>
                  <td>${order.totalPrice}</td>
                  <td>
                    {order.paid ? (
                      <>
                        <button className="btn btn-xs disabled">paid</button>
                        <br />
                        <small>
                          Transaction ID: <br />
                          <b className="text-purple-500">
                            {" "}
                            {order.transactionId}
                          </b>
                        </small>
                      </>
                    ) : (
                      <Link
                        to={`/dashboard/payment/${order._id}`}
                        className="btn btn-xs btn-secondary"
                      >
                        {" "}
                        pay now{" "}
                      </Link>
                    )}
                  </td>

                  <td>
                    {order.status !== "Shipped" ? (
                      <span className="text-orange-500">{order.status}</span>
                    ) : (
                      <span className="text-green-500">{order.status}</span>
                    )}
                  </td>
                  <td>
                    {order.paid ? (
                      <button className="btn btn-xs" disabled>
                        cancel
                      </button>
                    ) : (
                      <button
                        className="btn btn-xs"
                        onClick={() => cancelOrder(order._id)}
                      >
                        cancel
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
