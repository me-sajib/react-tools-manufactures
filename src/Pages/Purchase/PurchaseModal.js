import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.config";
import Spinner from "../Shared/Spinner";
import Swal from "sweetalert2";
import "./css/Purchase.css";

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
    console.log(
      userName,
      email,
      phone,
      address,
      orderQuantity,
      toolName,
      toolPrice,
      status
    );
    const totalPrice = orderQuantity * toolPrice;
    if (!userName || !email || !phone || !address || !orderQuantity) {
      Swal.fire("Error", "Please fill all the fields", "error");
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
      <div
        class="hero min-h-screen"
        style={{ backgroundImage: `url(${tool.image})` }}
      >
        <div class="hero-overlay bg-opacity-90"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h3 class="font-bold mb-5 text-3xl uppercase text-primary-500">
              You have purchase to <em> {name}</em>
            </h3>
            <h2 className="text-2xl uppercase pb-5 text-secondary">
              Order Details
            </h2>
            <form
              onSubmit={purchaseTool}
              className="grid grid-cols-1 gap-3 mt-2"
            >
              {/* current user name */}
              <div className="form-control w-full mx-w-md  text-black">
                <label htmlFor="" className="label ">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  readOnly
                  name="name"
                  value={user?.displayName}
                  class="input input-bordered input-md w-full max-w-md"
                />
              </div>

              {/* current user email */}
              <div className="form-control w-full mx-w-md text-black">
                <label htmlFor="" className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  readOnly
                  value={user?.email}
                  placeholder="your email"
                  class="input input-bordered  input-md w-full max-w-md"
                />
              </div>

              {/* user phone number */}
              <div className="form-control w-full mx-w-md">
                <label htmlFor="" className="label">
                  <span className="label-text text-white">Phone</span>
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="your phone number"
                  class="input input-bordered input-md w-full max-w-md"
                />
              </div>

              {/* user tools orders  number */}
              <div className="form-control w-full mx-w-md text-black">
                <label htmlFor="" className="label">
                  <span className="label-text text-white">Order Quantity</span>
                </label>
                <input
                  type="number"
                  name="orderCount"
                  value={orderCount}
                  onChange={(e) => setOrderCount(e.target.value)}
                  class="input input-bordered input-md w-full max-w-md"
                />
                {orderError && (
                  <p className="text-red-500 text-left">{orderError}</p>
                )}
              </div>
              <div className="form-control w-full mx-w-md text-black">
                <label htmlFor="" className="label">
                  <span className="label-text text-white">Address</span>
                </label>
                <textarea
                  type="text"
                  name="address"
                  placeholder="your shipping address"
                  class="input input-bordered input-md w-full max-w-md"
                />
              </div>

              {!orderError ? (
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary w-full max-w-md"
                />
              ) : (
                <input
                  type="button"
                  value="Submit"
                  className=" text-white btn error-btn w-full  max-w-md"
                  disabled
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
