import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Spinner from "../Shared/Spinner";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const { id } = useParams();
  const {
    data: order,
    isLoading,
    refetch,
  } = useQuery(["order", id], () =>
    fetch(`http://localhost:5000/userOrder/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    }).then((res) => res.json())
  );
  // if loading
  if (isLoading) return <Spinner />;
  const stripePromise = loadStripe(
    "pk_test_51L0gOaCq7ZcflQjle5umEcjGbX9usdmAmcrorDxeD9KSeFGWmNkPheV8jJYykprocmVaYmp92sbm9mmRtece8zhc0025qI5EpC"
  );
  return (
    <div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-secondary font-bold text-3xl">
            Hello, {order.userName}
          </p>
          <h2 className="card-title">
            Please Pay for{" "}
            <span className="text-purple-500 font-bold"> {order.toolName}</span>
          </h2>

          <p>Please pay: ${order.toolPrice}</p>

          <div className="my-12">
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
