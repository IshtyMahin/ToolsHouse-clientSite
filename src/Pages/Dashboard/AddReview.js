
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
    const onSubmit =async data =>{
        const review ={
            rating: data.rating,
            description: data.description
        }
        fetch('http://localhost:5000/review',{
                method: 'POST',
                headers:{
                    'content-type':'application/json',
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body:JSON.stringify(review)
            })
            .then(res=> res.json())
            .then(inserted=>{
                console.log(inserted)
                   if(inserted.insertedId){
                       toast.success('Doctor added successfully')
                       reset()
                   }
                   else{
                      toast.error('Failed to add the doctor')
                   }
            })
    } ;
    return (
       
        <form className='mx-16' onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            type="number"
            placeholder="Your Rating"
            className="input input-bordered w-full max-w-xs "
            {...register("rating",{
              required: {
                value:true,
                min:1,
                max:5,
                message: "Number is required & given number in 1 to 5",
              },

            })}
          />
         
          <label className="label">
            {errors.rating?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.rating.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            type="text"
            placeholder=""
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
        </div>
       
        <input
          className="btn  w-full  btn-primary bg-gradient-to-r from-secondary to-primary"
          type="submit"
          value="ADD"
        />
      </form>
      
    );
};

export default AddReview;