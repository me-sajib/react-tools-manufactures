import React from "react";

const Summery = () => {
  return (
    <div className="container-width py-24">
      <h2 className="text-3xl text-secondary font-bold py-12">
        Business Summery
      </h2>
      <div className="stats w-full shadow">
        <div className="stat">
          <div className="stat-figure text-primary">
            <i className="fa-solid fa-cart-shopping text-4xl"></i>
          </div>
          <div className="stat-title">We Served</div>
          <div className="stat-value text-primary">125K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <i className="fa-solid fa-users text-4xl"></i>
          </div>
          <div className="stat-title">Customers</div>
          <div className="stat-value text-secondary">10.6M</div>
          <div className="stat-desc">This our world wide customers</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="https://api.lorem.space/image/face?w=128&h=128" />
              </div>
            </div>
          </div>
          <div className="stat-title">Review</div>
          <div className="stat-value">8.4M</div>
          <div className="stat-desc">All Are Good Customers Review</div>
        </div>
      </div>
    </div>
  );
};

export default Summery;
