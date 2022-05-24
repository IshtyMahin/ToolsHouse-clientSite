import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import OneReview from "./OneReview";


const Review = () => {
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/review", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (<div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mx-12">
    {
      reviews.slice(0,6).map(review=> <OneReview 
         review={review}
         key={review._id}
      ></OneReview>)
    }

  </div>
  );
};

export default Review;
