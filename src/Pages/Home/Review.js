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
    fetch("https://young-wave-22909.herokuapp.com/review", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-5xl text-red-400 text-center my-12">
        Customers Review
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mx-12">
        {reviews.slice(0, 6).map((review) => (
          <OneReview review={review} key={review._id}></OneReview>
        ))}
      </div>
    </div>
  );
};

export default Review;
