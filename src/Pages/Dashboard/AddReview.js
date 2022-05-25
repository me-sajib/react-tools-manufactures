import React from "react";
import auth from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const userReview = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const reviewStar = e.target.review.value;
    if (name === "" || description === "" || reviewStar === "") {
      return Swal.fire("Please fill all the fields", "", "error");
    }
    const numberOfReview = parseFloat(reviewStar);
    if (numberOfReview < 1 || numberOfReview > 5) {
      return Swal.fire("Please enter a valid number 1 to 5", "", "error");
    }

    const review = { name, description, numberOfReview };
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // sweetalert
          Swal.fire({
            title: "Review Added",
            text: "Your review has been added",
            icon: "success",
            confirmButtonText: "OK",
          });
          e.target.reset();
        }
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center ">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="text-2xl font-bold">Give Feedback</h3>
            <form onSubmit={userReview} className="grid grid-cols-1 gap-3 ">
              {/* current user name */}
              <div className="form-control w-full mx-w-xs">
                <label htmlFor="" className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  disabled
                  name="name"
                  value={user?.displayName}
                  className="input input-bordered input-md w-full max-w-xs"
                />
              </div>
              {/* current address  */}
              <div className="form-control w-full mx-w-xs">
                <label htmlFor="" className="label">
                  <span className="label-text">Review</span>
                </label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  maxLength="1"
                  name="review"
                  placeholder="your review here 1 to 5"
                  className="input input-bordered input-md w-full max-w-xs"
                />
              </div>
              {/* current user name */}
              <div className="form-control w-full mx-w-xs">
                <label htmlFor="" className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  type="text"
                  name="description"
                  placeholder="your description"
                  className=" textarea textarea-bordered textarea-md w-full max-w-xs"
                />
              </div>
              <input type="submit" value="review" className="btn btn-primary" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
