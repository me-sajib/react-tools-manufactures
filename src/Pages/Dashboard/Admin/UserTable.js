import React from "react";
import Swal from "sweetalert2";

const UserTable = ({ user, refetch, index }) => {
  const createAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${user.email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          Swal.fire("Fail!", "Failed to Make an admin", "error");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire("Done!", "Successfully made an admin", "success");
        }
      });
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{user?.email}</td>
      <td>
        {user?.role !== "admin" ? (
          <button className="btn btn-xs btn-secondary" onClick={createAdmin}>
            make admin
          </button>
        ) : (
          <p>admin</p>
        )}
      </td>
      <td>
        <button className="btn btn-secondary btn-sm">delete</button>
      </td>
    </tr>
  );
};

export default UserTable;
