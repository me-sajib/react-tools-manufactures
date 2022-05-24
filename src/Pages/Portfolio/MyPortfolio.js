import React from "react";
import picture from "./image/me.jpg";

const MyPortfolio = () => {
  return (
    <div className="container-width py-12">
      <h1 className="text-center text-4xl my-12">My Profile</h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={picture}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="profile "
          />
          <div className="pl-12">
            <h1 className="text-5xl font-bold">
              Hey i'm <span className="text-primary">Mohammad Sajib</span>
            </h1>
            <p className="py-6 text-2xl font-bold">
              Email: me.mrsajib@gmail.com
            </p>
            <p className="pb-6 text-2xl font-bold">Education: HSC 2nd year</p>
            <p className="pb-6 text-2xl font-bold">
              Technologies: HTML, CSS, JAVASCRIPT, TAILWIND CSS, BOOTSTRAP,
              MATERIAL UI, REACT JS, NODE JS, EXPRESS JS, REST API, MONGODB{" "}
            </p>
            {/* top project */}
            <h1 className="text-3xl font-bold py-6">Top 3 project</h1>
            <p className="text-xl py-4">
              Body Builders:{" "}
              <a href="https://body-builder-43fde.web.app/" className="link">
                Live Site Link
              </a>
            </p>

            <p className="text-xl py-4">
              Bike Wear House:{" "}
              <a href="https://wear-house.web.app/" className="link">
                Live Site Link
              </a>
            </p>
            <p className="text-xl py-4">
              user Review Route:{" "}
              <a
                href="https://jocular-cocada-c4084e.netlify.app/"
                className="link"
              >
                Live Site Link
              </a>
            </p>

            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
