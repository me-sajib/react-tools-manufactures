import React, { useState } from "react";
import auth from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import ReactStars from "react-rating-stars-component";
import Swal from "sweetalert2";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  const [reviewCount, setReviewCount] = useState(0);
  const userReview = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const address = e.target.address.value;
    const description = e.target.description.value;
    const reviewStar = reviewCount;

    const review = { name, address, description, reviewStar };
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
          e.reset();
        }
      });
  };

  const reviewStarts = {
    size: 30,
    count: 5,
    color: "yellow",
    activeColor: "yellow",
    value: 5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      setReviewCount(newValue);
    },
  };

  return (
    <div>
      <div className="flex items-center justify-center ">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 className="text-2xl font-bold">Give Feedback</h3>
            <ReactStars {...reviewStarts} />
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
                  class="input input-bordered input-md w-full max-w-xs"
                />
              </div>
              {/* current address  */}
              <div className="form-control w-full mx-w-xs">
                <label htmlFor="" className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="your address"
                  class="input input-bordered input-md w-full max-w-xs"
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
                  class=" textarea textarea-bordered textarea-md w-full max-w-xs"
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
