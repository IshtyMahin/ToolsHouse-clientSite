import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import Navbar from "../Shared/Navbar";

const Purchase = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [user, loading, error] = useAuthState(auth);
  const { id } = useParams();
  const url = `http://localhost:5000/product/${id}`;
  const { data: product, isLoading } = useQuery(["product", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  

  const onSubmit =async (data) =>{
    const order= {
        customerName: user?.displayName,
        email: user?.email,
        productName: product?.productName,
        price: product?.price,
        address: data.adress,
        phone: data.phone,
        quantity: data.quantity,
      };

    fetch('http://localhost:5000/order',{
            method: 'POST',
            headers:{
                'content-type':'application/json',
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body:JSON.stringify(order)
        })
        .then(res=> res.json())
        .then(inserted=>{
            console.log(inserted)
               if(inserted.insertedId){
                   toast.success( "Order added successfully , For payment go to My order page")
                   reset()
               }
               else{
                  toast.error('Failed to add the Review')
               }
        })
} ;
  if (isLoading || loading) {
    <Loading></Loading>;
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="mx-8 lg:mx-20">
        <div>
          <div class="card  bg-base-100 shadow-xl">
            <div class="card-body h-75 items-center text-center">
              <div className="w-50 h-50">
                <img className="" src={product?.img} alt="" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">
                  {product?.productName}{" "}
                </h2>

                <p>
                  <span className="text-xl ">Quantity :</span>{" "}
                  {product?.quantity}
                </p>
                <p>
                  <span className="text-xl ">Minimum order :</span>{" "}
                  {product?.minorder}
                </p>
                <p>
                  <span className="text-xl ">Price:</span> {product?.price}$
                </p>
                <p>
                  <span className="text-xl ">Description :</span>{" "}
                  {product?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-2 justify-items-center "
        >
          <input
            type="email"
            disabled
            value={user.email}
            className="input input-bordered w-full "
          />
          <input
            type="text"
            disabled
            value={user.displayName}
            className="input input-bordered w-full "
          />

          <input
            type="text"
            placeholder="Address"
            className="input input-bordered w-full  "
            {...register("address", {
              required: {
                value: true,

                message: "address is required ",
              },
            })}
          />

          <label className="label">
            {errors.address?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.address.message}
              </span>
            )}
          </label>
          <input
            type="number"
            placeholder="Phone number"
            className="input input-bordered w-full  "
            {...register("phone", {
              required: {
                value: true,

                message: "Phone number is required ",
              },
            })}
          />

          <label className="label">
            {errors.phone?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.phone.message}
              </span>
            )}
          </label>
          <input
            type="number"
            placeholder=" Order quantity"
            className="input input-bordered w-full  "
            {...register("quantity", {
              required: {
                value: true,

                message: `Order quantity is required and give number grater than ${product?.minorder}`,
              },
              min: {
                value: product?.minorder,
                message: `Number is less than ${product?.minorder}`,
              },
              max: {
                value: product?.quantity,
                message: `Number is greater than ${product?.quantity}`,
              },
            })}
          />

          <label className="label">
            {errors.quantity?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.quantity.message}
              </span>
            )}
            {errors.quantity?.type === "min" && (
              <span className="label-text-alt text-red-500">
                {errors.quantity.message}
              </span>
            )}
            {errors.quantity?.type === "max" && (
              <span className="label-text-alt text-red-500">
                {errors.quantity.message}
              </span>
            )}
          </label>

          <input
            className="btn  w-full  btn-primary bg-gradient-to-r from-secondary to-primary mb-12"
            type="submit"
            value="Order"
          />
        </form>
      </div>
    </>
  );
};

export default Purchase;
