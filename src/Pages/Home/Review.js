import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";



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
  return (
    <>
      <h2> Review</h2>
      
    </>
  );
};

export default Review;
