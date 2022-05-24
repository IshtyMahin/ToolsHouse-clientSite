
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AddReview = () => {
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
    const [user, loading, error] = useAuthState(auth);
    console.log(user)
    const onSubmit =async (data) =>{
        const review ={
            rating: data.rating,
            description: data.description,
            email:user.email,
            name:user.displayName
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
                       toast.success('Review added successfully')
                       reset()
                   }
                   else{
                      toast.error('Failed to add the Review')
                   }
            })
    } ;
    if(loading){
        return <Loading></Loading>
    }
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
                
                message: "Number is required & given number in 1 to 5",
              },
              max: {
                value: 5,
                message: 'Number is greater than 5'
              },
              min: {
                value: 1,
                message: 'Number is less than 1'
              }
            })}
          />
         
          <label className="label">
            {errors.rating?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.rating.message}
              </span>
            )}
            {errors.rating?.type === "max" && (
              <span className="label-text-alt text-red-500">
                {errors.rating.message}
              </span>
            )}
            {errors.rating?.type === "min" && (
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