import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.config";
import Spinner from "../../Shared/Spinner";
import UserTable from "./UserTable";

const Users = () => {
  const [user, loading] = useAuthState(auth);
  const {
    data: allUser,
    isLoading,
    refetch,
  } = useQuery(["user"], () =>
    fetch("https://boiling-hollows-81420.herokuapp.com/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) return <Spinner />;
  if (loading) return <Spinner />;

  return (
    <div>
      {/* show information */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Make admin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allUser.map((users, index) => (
              <UserTable
                users={users}
                currentUser={user}
                key={users._id}
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
