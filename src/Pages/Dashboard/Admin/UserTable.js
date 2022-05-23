import React from "react";

const UserTable = ({ user, refetch, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{user?.email}</td>
      <td>
        <button className="btn btn-xs btn-primary">make admin</button>
      </td>
      <td>
        <button className="btn btn-secondary btn-sm">delete</button>
      </td>
    </tr>
  );
};

export default UserTable;
