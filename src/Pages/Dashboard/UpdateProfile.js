import React from "react";
import Swal from "sweetalert2";

const UpdateProfile = ({ user, refetch }) => {
  const updateInformation = (e) => {
    e.preventDefault();
    const name = user?.displayName;
    const email = user?.email;
    const linkedin = e.target.linkedin.value;
    const phone = e.target.phone.value;
    const city = e.target.city.value;
    const education = e.target.education.value;
    // if any field is empty
    if (!name || !email || !linkedin || !phone || !city || !education) {
      Swal.fire({
        title: "Error",
        text: "All fields are required",
        icon: "error",
      });
      return;
    }
    const information = { name, email, linkedin, phone, city, education };
    fetch(`http://localhost:5000/userInformation/${email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(information),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire(
            "Updated!",
            "Your Profile Updated Successfully!",
            "success"
          );
          refetch();
        }
      });
  };
  return (
    <div className="my-24 flex items-center justify-center h-screen">
      <div className="card w-96 bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold  uppercase">
            Update Information
          </h2>
          <form className="grid grid-cols-1 gap-3" onSubmit={updateInformation}>
            <div className="form-control w-full mx-w-xs">
              <label htmlFor="" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                disabled
                name="email"
                value={user?.email}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full mx-w-xs">
              <label htmlFor="" className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                disabled
                value={user?.displayName}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full mx-w-xs">
              <label htmlFor="" className="label">
                <span className="label-text">LinkedIn</span>
              </label>
              <input
                type="text"
                name="linkedin"
                placeholder="Your LinkedIn profile link"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full mx-w-xs">
              <label htmlFor="" className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Your Phone number"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full mx-w-xs">
              <label htmlFor="" className="label">
                <span className="label-text">Education</span>
              </label>
              <input
                type="text"
                name="education"
                placeholder="Your Education"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full mx-w-xs">
              <label htmlFor="" className="label">
                <span className="label-text">City/Town</span>
              </label>
              <input
                type="text"
                name="city"
                placeholder="Your City or Town"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            <input type="submit" value="update" className="btn w-full" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
