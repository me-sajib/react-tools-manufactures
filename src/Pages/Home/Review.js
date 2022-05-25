import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./css/Review.css";
import { useQuery } from "react-query";

const Review = () => {
  const { data: review, isLoading } = useQuery("review", () =>
    fetch("https://boiling-hollows-81420.herokuapp.com/review").then((res) =>
      res.json()
    )
  );
  if (isLoading)
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  const reviewStars = (num) => {
    // show star based on number
    let stars = [];
    for (let i = 0; i < num; i++) {
      stars.push(<i className="fas fa-star text-orange-500" key={i}></i>);
    }
    return stars;
  };
  return (
    <div className="container-width">
      <h2 className="text-3xl font-bold text-secondary py-12">Review</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-4"
      >
        {review.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="card w-96 bg-base-100 shadow-xl mb-12">
              <figure className="px-10 pt-10">
                <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                    <span className="text-3xl">{review.name}</span>
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{review.name}</h2>
                {/* inline show star */}
                <div className="flex items-center justify-center">
                  {reviewStars(review.numberOfReview)}
                </div>
                <p>{review.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
