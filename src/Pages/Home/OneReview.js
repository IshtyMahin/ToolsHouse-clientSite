import React from 'react';
import { AiFillStar } from "react-icons/ai";
const OneReview = ({review}) => {
    return (
        <div class="card  bg-base-100 shadow-xl">
  <div class="avatar mx-auto mt-6">
  <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://api.lorem.space/image/face?hash=3174" alt=''/>
  </div>
</div>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{review.rating}<AiFillStar/> </h2>
    <p>{review.description}</p>
    
  </div>
</div>
    );
};

export default OneReview;