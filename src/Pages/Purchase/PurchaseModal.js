import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.config";
import Spinner from "../Shared/Spinner";
import Swal from "sweetalert2";

const PurchaseModal = ({ tool }) => {
  const [user, loading] = useAuthState(auth);
  const { name, price, minimumOrder, available } = tool;
  const [orderCount, setOrderCount] = useState(minimumOrder);
  const purchaseTool = async (e) => {
    e.preventDefault();
    const userName = user?.displayName;
    const email = user?.email;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const orderQuantity = orderCount;
    const toolName = name;
    const toolPrice = price;
    const status = "Pending";

    const totalPrice = orderQuantity * toolPrice;
    if (!userName || !email || !phone || !address || !orderQuantity) {
      alert("Please fill out all fields");
      return;
    }
    // order information
    const order = {
      userName,
      email,
      phone,
      address,
      orderQuantity,
      toolName,
      toolPrice,
      totalPrice,
      status,
    };
    // post order to database
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Done!", "product ordered successfully", "success");
        }
      });
  };
  //   error order count
  let orderError;
  if (orderCount < minimumOrder)
    orderError = `Please order at least ${minimumOrder} peaces`;

  if (orderCount > available)
    orderError = `Oops! This Tools available on ${available} peaces`;

  if (loading) return <Spinner />;
  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="purchase-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            htmlFor="purchase-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-3xl uppercase text-blue-500">
            You have purchase to {name}
          </h3>
          <div class="py-4">
            <h2 className="text-2xl uppercase pb-5 text-secondary">
              Order Details
            </h2>
            {/* form to details user send to tools */}
            <form
              onSubmit={purchaseTool}
              className="grid grid-cols-1 gap-3 mt-2"
            >
              {/* current user name */}
              <div className="form-control w-full mx-w-xs">
                <label htmlFor="" className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  disabled
                  name="name"
                  value={user?.displayName}
                  class="input input-bordered input-md w-full max-w-xs"
                />
              </div>

              {/* current user email */}
              <div className="form-control w-full mx-w-xs">
                <label htmlFor="" className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  disabled
                  value={user?.email}
                  placeholder="your email"
                  class="input input-bordered input-md w-full max-w-xs"
                />
              </div>

              {/* user phone number */}
              <div className="form-control w-full mx-w-xs">
                <label htmlFor="" className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="your phone number"
                  class="input input-bordered input-md w-full max-w-xs"
                />
              </div>

              {/* user tools orders  number */}
              <div className="form-control w-full mx-w-xs">
                <label htmlFor="" className="label">
                  <span className="label-text">Order Quantity</span>
                </label>
                <input
                  type="number"
                  name="orderCount"
                  value={orderCount}
                  onChange={(e) => setOrderCount(e.target.value)}
                  class="input input-bordered input-md w-full max-w-xs"
                />
                {orderError && <p className="text-red-500">{orderError}</p>}
              </div>
              <div className="form-control w-full mx-w-xs">
                <label htmlFor="" className="label">
                  <span className="label-text">Address</span>
                </label>
                <textarea
                  type="text"
                  name="address"
                  placeholder="your shipping address"
                  class="input input-bordered input-md w-full max-w-xs"
                />
              </div>
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary w-full max-w-xs"
              />
              <div class="modal-action">
                {!orderError ? (
                  <label
                    type="submit"
                    id="purchase-modal"
                    className="btn"
                    htmlFor="purchase-modal"
                  >
                    buy now
                  </label>
                ) : (
                  <label class="btn btn-disabled">Buy now</label>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
