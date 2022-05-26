import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import DeleteConfirmModalForOrder from "./DeleteConfirmModalForOrder";

const ManageAllOrder = () => {
  const [deletingOrder, setDeletingOrder] = useState(null);
  console.log(deletingOrder);
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`https://young-wave-22909.herokuapp.com/order`).then(
      (res) => res.json()
    )
  );
  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="m-5">
      <h2>My Order : {orders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>customerName</th>

              <th>Payment</th>
              <th>Cancel order</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.productName}</td>
                <td>{order.customerName}</td>

                <td>
                  { !order.paid && (
                    <p>Unpaid</p>
                  )}
                  {order.price && order.paid && (
                    <span className="text-success">Paid</span>
                  )}
                </td>
                <td>
                  <label
                    onClick={() => setDeletingOrder(order)}
                    htmlFor="delete-confirm-modal"
                    className="btn  btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingOrder && (
        <DeleteConfirmModalForOrder
          deletingOrder={deletingOrder}
          refetch={refetch}
          setDeletingOrder={setDeletingOrder}
        ></DeleteConfirmModalForOrder>
      )}
    </div>
  );
};

export default ManageAllOrder;