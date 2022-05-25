import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ deletingProduct,refetch,setDeletingProduct }) => {
    const {productName,_id} = deletingProduct;
    console.log(deletingProduct)
    const handleDelete = () =>{
        const url = `http://localhost:5000/product/${_id}`
        console.log(url)
        fetch(url,{
            method: 'DELETE',
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount){
                toast.success(`Product: ${productName} is deleted.`)
                setDeletingProduct(null)
                refetch()
            }
        })
    }
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you sure you want to delete {productName}?
          </h3>
          
          <button onClick={()=>handleDelete()} class="btn btn-xs btn-error">Delete</button>
          <div class="modal-action">
            <label for="delete-confirm-modal" class="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
