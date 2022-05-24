import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content ">
      <div className="container-width">
        <span className="footer-title">My Account</span>
        <a className="link link-hover" href="slider1">
          Search Terms
        </a>
        <a className="link link-hover" href="slider1">
          Advance Search
        </a>
        <a className="link link-hover" href="slider1">
          Help & FAQs
        </a>
        <a className="link link-hover" href="slider1">
          Stor Locations
        </a>
        <a className="link link-hover" href="slider1">
          Stor Orders and Returns{" "}
        </a>
      </div>
      <div>
        <span className="footer-title">Construction</span>
        <a className="link link-hover" href="slider1">
          Masonry Trowel
        </a>
        <a className="link link-hover" href="slider1">
          Measurement Tape
        </a>
        <a className="link link-hover" href="slider1">
          Wheel Barrow
        </a>
        <a className="link link-hover" href="slider1">
          Concrete Mixer
        </a>
        <a className="link link-hover" href="slider1">
          Sand screening
        </a>
      </div>
      <div>
        <span className="footer-title">Information</span>
        <a className="link link-hover" href="#slider1">
          Contact Us
        </a>
        <a className="link link-hover" href="#slider1">
          About Us
        </a>
        <a className="link link-hover" href="#slider1">
          Careers
        </a>
        <a className="link link-hover" href="#slider1">
          Refunds and returns
        </a>
        <a className="link link-hover" href="#slider1">
          Deliveries
        </a>
      </div>
      <div>
        <span className="footer-title">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
