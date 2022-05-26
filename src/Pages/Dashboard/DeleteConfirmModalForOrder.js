import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModalForOrder = ({
  deletingOrder,
  refetch,
  setDeletingOrder,
}) => {
  const { productName, _id } = deletingOrder;
  console.log(deletingOrder);
  const handleDelete = () => {
    const url = `https://young-wave-22909.herokuapp.com/order/${_id}`;
    console.log(url);
    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Product: ${productName} is deleted.`);
          setDeletingOrder(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to delete {productName}?
          </h3>

          <button
            onClick={() => handleDelete()}
            className="btn btn-xs btn-error"
          >
            Delete
          </button>
          <div className="modal-action">
            <label htmlFor="delete-confirm-modal" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModalForOrder;
