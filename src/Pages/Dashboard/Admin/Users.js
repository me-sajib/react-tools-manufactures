import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../Shared/Spinner";
import UserTable from "./UserTable";

const Users = () => {
  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery(["user"], () =>
    fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) return <Spinner />;
  return (
    <div>
      {/* show information */}
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Make admin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => (
              <UserTable
                user={user}
                key={user._id}
                index={index}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
