import React from "react";

const Summery = () => {
  return (
    <div className="container-width py-24">
      <h2 className="text-3xl text-secondary font-bold py-12">
        Business Summery
      </h2>
      <div class="stats w-full shadow">
        <div class="stat">
          <div class="stat-figure text-primary">
            <i class="fa-solid fa-cart-shopping text-4xl"></i>
          </div>
          <div class="stat-title">We Served</div>
          <div class="stat-value text-primary">125K</div>
          <div class="stat-desc">21% more than last month</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <i class="fa-solid fa-users text-4xl"></i>
          </div>
          <div class="stat-title">Customers</div>
          <div class="stat-value text-secondary">10.6M</div>
          <div class="stat-desc">This our world wide customers</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <div class="avatar online">
              <div class="w-16 rounded-full">
                <img src="https://api.lorem.space/image/face?w=128&h=128" />
              </div>
            </div>
          </div>
          <div class="stat-title">Review</div>
          <div class="stat-value">8.4M</div>
          <div class="stat-desc">All Are Good Customers Review</div>
        </div>
      </div>
    </div>
  );
};

export default Summery;
