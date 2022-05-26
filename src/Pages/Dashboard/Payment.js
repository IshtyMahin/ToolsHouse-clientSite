import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import CheckoutFrom from "./CheckoutFrom";

const stripePromise = loadStripe(
  "pk_test_51L1Vz7HpJM4Nl6i6dzKQpAqmqG9FW7lvCOCq5a9hZhWuJ0qesYpHTBn1ysM2FrreO8V1Wpaufn9N0nRmrg8iSira007pjFTQbH"
);

const Payment = () => {
  const [user, loading, error] = useAuthState(auth);
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const {
    data: order,
    isLoading,
    refetch,
  } = useQuery("order", () =>
    fetch(`https://young-wave-22909.herokuapp.com/order/${user.email}/${id}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setItem(data))
  );
  console.log(item);
  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="ml-12">
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success">Hello, {item.customerName}</p>
          <h2 className="card-title">Pay for {item?.productName}</h2>

          <p>Please pay: ${item?.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutFrom></CheckoutFrom>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
