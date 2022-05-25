import React from "react";
import Swal from "sweetalert2";

const UserTable = ({ users, refetch, currentUser, index }) => {
  const createAdmin = () => {
    fetch(
      `https://boiling-hollows-81420.herokuapp.com/user/admin/${users.email}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      }
    )
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

  // delete user
  const deleteUser = () => {
    // confirm to delete user show swl alert
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure want to delete this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      // is confirm button clicked
      if (result.isConfirmed) {
        const email = users.email;
        fetch(`https://boiling-hollows-81420.herokuapp.com/user/${email}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("access")}`,
          },
          body: JSON.stringify({ email }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "User has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{users?.email}</td>
      <td>
        {users?.role !== "admin" ? (
          <button className="btn btn-xs btn-secondary" onClick={createAdmin}>
            make admin
          </button>
        ) : (
          <p>admin</p>
        )}
      </td>
      <td>
        {users?.email === currentUser?.email ? (
          <button className="btn btn-secondary btn-sm" disabled>
            delete
          </button>
        ) : (
          <button className="btn btn-secondary btn-sm" onClick={deleteUser}>
            delete
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserTable;
