import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.config";
import Spinner from "../Shared/Spinner";
import Swal from "sweetalert2";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, uLoading] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setOrders(data);
          setLoading(false);
        });
    }
  }, [user]);

  const cancelOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div>
      <h2 className="text-3xl py-5 font-bold">Order Summery</h2>

      <div>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th>Tools</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Pay</th>
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
                    <button className="btn btn-xs btn-secondary">
                      pay now
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-xs"
                      onClick={() => cancelOrder(orders._id)}
                    >
                      cancel
                    </button>
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
