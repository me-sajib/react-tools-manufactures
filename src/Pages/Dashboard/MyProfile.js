import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.config";
import Spinner from "../Shared/Spinner";
import UpdateProfile from "./UpdateProfile";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  // const [information, setInformation] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/information/${user.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setInformation(data);
  //     });
  // }, [user]);
  // console.log(information);
  const {
    data: information,
    isLoading,
    refetch,
  } = useQuery(["profileData", user], () =>
    fetch(`http://localhost:5000/information/${user.email}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) return <Spinner />;
  return (
    <div>
      <h2 className="text-3xl font-bold py-4 text-blue-500 uppercase">
        my profile
      </h2>

      {/* show information */}
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>LinkedIn</th>
              <th>Phone</th>
              <th>City</th>
              <th>Education</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user?.displayName}</td>
              <td>{user?.email}</td>
              <td>{user?.linkedin}</td>
              <td>{information?.phone}</td>
              <td>{information?.city}</td>
              <td>{information?.education}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* update profile */}
      <UpdateProfile
        user={user}
        loading={loading}
        refetch={refetch}
        information={information}
      />
    </div>
  );
};

export default MyProfile;
