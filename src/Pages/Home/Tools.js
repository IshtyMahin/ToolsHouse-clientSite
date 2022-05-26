import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import OneTool from "./OneTool";

const Tools = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch("https://young-wave-22909.herokuapp.com/product").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(products);
  return (
    <>
      <h2 className="text-5xl text-red-400 text-center mt-12">Tools</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mx-12">
        {products.slice(-3).map((product) => (
          <OneTool product={product} key={product._id}></OneTool>
        ))}
      </div>
    </>
  );
};

export default Tools;
