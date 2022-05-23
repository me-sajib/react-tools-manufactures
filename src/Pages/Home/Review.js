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
import ReactStars from "react-rating-stars-component";

const Review = () => {
  const { data: review, isLoading } = useQuery("review", () =>
    fetch("http://localhost:5000/review").then((res) => res.json())
  );
  if (isLoading)
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );

  const reviewStarts = {
    size: 15,
    count: 5,
    color: "yellow",
    activeColor: "yellow",
    value: 0,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
  };
  console.log(reviewStarts.value);
  return (
    <div className="container-width">
      <h2 className="text-3xl">Review</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {review.map((review) => (
          <SwiperSlide key={review._id}>
            <div class="card w-96 bg-base-100 shadow-xl">
              <figure class="px-10 pt-10">
                <div class="avatar placeholder">
                  <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
                    <span class="text-3xl">{review.name}</span>
                  </div>
                </div>
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">{review.name}</h2>
                <ReactStars {...reviewStarts} />
                {(reviewStarts.value = review.reviewStar)}
                <p>{review.description}</p>
                <p>review count{review.reviewStart}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
