import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";

import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  const {
    data: oneuser,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`https://young-wave-22909.herokuapp.com/user/${user.email}`).then(
      (res) => res.json()
    )
  );

  const onSubmit = async (data) => {
    const userInfo = {
      email: user.email,
      name: user.displayName,
      location: data.location,
      linkedIn: data.linkedIn,
      education: data.education,

      phone: data.phone,
      
    };
    console.log(userInfo);
    const url = `https://young-wave-22909.herokuapp.com/user/${user.email}`;
    console.log(url);
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ userInfo }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.upserted) {
          toast("Your Information is update");
        }
        reset();
      });
  };

  if (loading || isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-3xl text-red-400">Your Profile</h2>
      <div>
        <div className="avatar mt-12">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user.photoURL} alt="your gmail account img" />
          </div>
        </div>
        <div className="mt-12">
          <label htmlFor="info-model" className="btn modal-button">
            See your personal information ...
          </label>

          <input type="checkbox" id="info-model" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="info-model"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ???
              </label>
              <h3 className="text-lg font-bold">My Information</h3>
              <p className="py-2">Name : {user.displayName}</p>
              <p className="py-2">Email : {user.email}</p>
              <p className="py-2">
                Education:{" "}
                {oneuser?.userInfo?.education
                  ? oneuser?.userInfo?.education
                  : "Not avaiable"}
              </p>
              <p className="py-2">
                Location:{" "}
                {oneuser?.userInfo?.location
                  ? oneuser?.userInfo?.location
                  : "Not avaiable"}
              </p>
              <p className="py-2">
                Phone:{" "}
                {oneuser?.userInfo?.phone
                  ? oneuser?.userInfo?.phone
                  : "Not avaiable"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-3xl mt-12 font-semibold">
        Update or give your information.{" "}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-3 justify-items-center m-12"
      >
        <input
          type="text"
          name="name"
          disabled
          value={user?.displayName || ""}
          className="input input-bordered w-full "
        />
        <input
          type="email"
          name="email"
          disabled
          value={user?.email || ""}
          className="input input-bordered w-full "
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="input input-bordered w-full "
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
          type="text"
          placeholder="Eduction"
          className="input input-bordered w-full  "
          {...register("education", {
            required: {
              value: true,

              message: "Education is required ",
            },
          })}
        />

        <label className="label">
          {errors.education?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors.education.message}
            </span>
          )}
        </label>
        <input
          type="text"
          placeholder="Location"
          className="input input-bordered w-full  "
          {...register("location", {
            required: {
              value: true,

              message: "Location is required ",
            },
          })}
        />

        <label className="label">
          {errors.location?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors.location.message}
            </span>
          )}
        </label>
        <input
          type="url"
          placeholder="LinkedIn site Link"
          className="input input-bordered w-full  "
          {...register("linkedIn ", {
            required: {
              value: true,

              message: "LinkedIn  is required ",
            },
          })}
        />

        <label className="label">
          {errors.linkedIn?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors.linkedIn.message}
            </span>
          )}
        </label>
        <input
          type="submit"
          value="Submit"
          placeholder="Type here"
          className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary w-full "
        />
      </form>
    </div>
  );
};

export default MyProfile;
