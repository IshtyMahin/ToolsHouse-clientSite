import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [user, loading, error] = useAuthState(auth);
  console.log(user);

  const imgStorageKey = "dccf78e1bf130f4292eb12620c826d79";

  const onSubmit = async (data) => {
    const image = data.image[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          console.log(img);
          const product = {
            productName: data.name,
            minorder: data.minorder,
            quantity: data.quantity,
            price: data.price,
            description: data.description,
            img: img,
          };
          fetch("https://young-wave-22909.herokuapp.com/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              console.log(inserted);
              if (inserted.insertedId) {
                toast.success("Product added successfully");
                reset();
              } else {
                toast.error("Failed to add the Product");
              }
            });
        }
      });
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mx-20 lg:mx-32 my-12">
      <h3 className="text-2xl text-red-400 font-semibold mb-2">Add product</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-2 justify-items-center"
      >
        <input
          type="text"
          placeholder="Product Name"
          className="input input-bordered w-full  "
          {...register("name", {
            required: {
              value: true,

              message: "Number is required ",
            },
          })}
        />

        <label className="label">
          {errors.name?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors.name.message}
            </span>
          )}
        </label>
        <input
          type="number"
          placeholder="Minimum order quantity"
          className="input input-bordered w-full  "
          {...register("minorder", {
            required: {
              value: true,

              message: "minmum Order is required and number is greater than 10",
            },
            min: {
              value: 10,
              message: "Number is less than 10",
            },
          })}
        />

        <label className="label">
          {errors.minorder?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors.minorder.message}
            </span>
          )}
          {errors.minorder?.type === "min" && (
            <span className="label-text-alt text-red-500">
              {errors.minorder.message}
            </span>
          )}
        </label>
        <input
          type="number"
          placeholder="Available quantity"
          className="input input-bordered w-full  "
          {...register("quantity", {
            required: {
              value: true,

              message: "quantity is required ",
            },
            min: {
              value: 10,
              message: "Number is less than 10",
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
        </label>
        <input
          type="number"
          placeholder="Price"
          className="input input-bordered w-full  "
          {...register("price", {
            required: {
              value: true,

              message: "price is required ",
            },
            min: {
              value: 1,
              message: "Number is less than 1",
            },
          })}
        />

        <label className="label">
          {errors.price?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors.price.message}
            </span>
          )}
          {errors.price?.type === "min" && (
            <span className="label-text-alt text-red-500">
              {errors.price.message}
            </span>
          )}
        </label>

        <textarea
          type="text"
          placeholder="Description"
          className="input input-bordered w-full "
          {...register("description", {
            required: {
              value: true,
              message: "description is Required",
            },
          })}
        />
        <label className="label">
          {errors.description?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors.description.message}
            </span>
          )}
        </label>
        <input
          type="file"
          className="input input-bordered w-full max-w-xs pt-1"
          {...register("image", {
            required: {
              value: true,
              message: "Image is Required",
            },
          })}
        />
        <label className="label">
          {errors.image?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors.image.message}
            </span>
          )}
        </label>
        <input
          className="btn  w-full  btn-primary bg-gradient-to-r from-secondary to-primary"
          type="submit"
          value="ADD"
        />
      </form>
    </div>
  );
};

export default AddProduct;
