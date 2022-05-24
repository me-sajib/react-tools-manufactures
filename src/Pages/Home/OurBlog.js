import React from "react";
import img1 from "../../images/blog/blog1.jpg";
import img2 from "../../images/blog/blog2.jpg";
const OurBlog = () => {
  return (
    <>
      <div className="container-width ">
        <h2 className="text-4xl font-bold text-secondary">Blog Posts</h2>
        <div className="py-20 grid lg:grid-cols-2 sm:grid-cols-1 gap-12">
          <div className="card  bg-primary  ">
            <figure>
              <img src={img1} alt="Shoes" />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">EXPERT SKIRTING OF TILES DONE</h2>
              <p className="py-4">
                Do you put skirting on tiles? Aesthetically it's always a much
                better finish with skirting boards fitted after tiling,but it
                isn't just about the visual aspect,when initially tiling the
                floor
              </p>
              <div className="card-actions justify-end">
                <button className="uppercase btn btn-info">read more</button>
              </div>
            </div>
          </div>
          <div className="card bg-primary ">
            <figure>
              <img src={img2} alt="Shoes" />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">EXPERT SKIRTING OF TILES DONE</h2>
              <p className="py-4">
                Fixing a Leaky Kitchen or Bathroom Pipe. The verdict: Try to DIY
                it.Hanging Wallpaper. The verdict: Hire a proRemoving Popcorn
                Ceilings Fixing a Clogged Garbage Disposal
              </p>
              <div className="card-actions justify-end">
                <button className="uppercase btn btn-info">read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurBlog;
