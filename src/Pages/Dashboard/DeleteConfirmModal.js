import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({
  deletingProduct,
  refetch,
  setDeletingProduct,
}) => {
  const { productName, _id } = deletingProduct;
  console.log(deletingProduct);
  const handleDelete = () => {
    const url = `https://young-wave-22909.herokuapp.com/product/${_id}`;
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
          setDeletingProduct(null);
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

export default DeleteConfirmModal;
