import React from "react";

const Footer = () => {
  return (
    <footer class="footer p-10 bg-base-200 text-base-content ">
      <div className="container-width">
        <span class="footer-title">My Account</span>
        <a class="link link-hover" href="slider1">
          Search Terms
        </a>
        <a class="link link-hover" href="slider1">
          Advance Search
        </a>
        <a class="link link-hover" href="slider1">
          Help & FAQs
        </a>
        <a class="link link-hover" href="slider1">
          Stor Locations
        </a>
        <a class="link link-hover" href="slider1">
          Stor Orders and Returns{" "}
        </a>
      </div>
      <div>
        <span class="footer-title">Construction</span>
        <a class="link link-hover" href="slider1">
          Masonry Trowel
        </a>
        <a class="link link-hover" href="slider1">
          Measurement Tape
        </a>
        <a class="link link-hover" href="slider1">
          Wheel Barrow
        </a>
        <a class="link link-hover" href="slider1">
          Concrete Mixer
        </a>
        <a class="link link-hover" href="slider1">
          Sand screening
        </a>
      </div>
      <div>
        <span class="footer-title">Information</span>
        <a class="link link-hover" href="#slider1">
          Contact Us
        </a>
        <a class="link link-hover" href="#slider1">
          About Us
        </a>
        <a class="link link-hover" href="#slider1">
          Careers
        </a>
        <a class="link link-hover" href="#slider1">
          Refunds and returns
        </a>
        <a class="link link-hover" href="#slider1">
          Deliveries
        </a>
      </div>
      <div>
        <span class="footer-title">Newsletter</span>
        <div class="form-control w-80">
          <label class="label">
            <span class="label-text">Enter your email address</span>
          </label>
          <div class="relative">
            <input
              type="text"
              placeholder="username@site.com"
              class="input input-bordered w-full pr-16"
            />
            <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
