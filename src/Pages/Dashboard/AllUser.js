import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import User from './User';

const AllUser = () => {
    const {
        data:users,
        isLoading,
        refetch,
      } = useQuery("users", () =>
        fetch("http://localhost:5000/user", {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }).then((res) => res.json())
      );
      console.log(users)
      if (isLoading) {
        return <Loading></Loading>;
      }
    
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
                      <User
                        key={user.id}
                        user={user}
                        index={index}
                        refetch={refetch}
                      ></User>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
    );
};

export default AllUser;