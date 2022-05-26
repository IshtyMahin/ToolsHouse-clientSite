import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import User from "./User";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  const url = `https://young-wave-22909.herokuapp.com/user`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

  return (
    <div className="m-5">
      <h2 className="text-2xl">All users : {users?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <User key={index} user={user} index={index}></User>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
