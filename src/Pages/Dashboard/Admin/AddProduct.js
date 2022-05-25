import React from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const handleProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const minimumOrder = e.target.minimumOrder.value;
    const available = e.target.availableProduct.value;
    const image = e.target.image.value;
    const product = {
      name,
      price,
      description,
      minimumOrder,
      available,
      image,
    };

    // add product api call
    fetch("https://boiling-hollows-81420.herokuapp.com/tools", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access")}`,
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire(
            "Product Added!",
            "Product has been added to the database.",
            "success"
          );
          e.target.reset();
        }
      });
  };
  return (
    <div className="my-14 flex items-center justify-center h-screen">
      <div className="card w-96 bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold  uppercase">
            Add a product
          </h2>
          <form className="grid grid-cols-1 gap-3" onSubmit={handleProduct}>
            <div className="form-control w-full mx-w-xs">
              <label htmlFor="" className="label">
                <span className="label-text uppercase">product name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                name="name"
                placeholder="Product name"
              />
            </div>
            <div className="form-control w-full mx-w-xs">
              <label htmlFor="" className="label">
                <span className="label-text uppercase">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Product Price"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full mx-w-xs">
              <label htmlFor="" className="label">
                <span className="label-text uppercase">Minimum Order</span>
              </label>
              <input
                type="number"
                name="minimumOrder"
                placeholder="Product Minimum Order"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full mx-w-xs">
              <label htmlFor="" className="label">
                <span className="label-text uppercase">Available Product</span>
              </label>
              <input
                type="number"
                name="availableProduct"
                placeholder="Available Product"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full mx-w-xs">
              <label htmlFor="" className="label">
                <span className="label-text uppercase">product image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Product image link"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full mx-w-xs">
              <label htmlFor="" className="label">
                <span className="label-text uppercase">
                  product Description
                </span>
              </label>
              <textarea
                type="text"
                name="description"
                placeholder="Product Description"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            <input type="submit" value="Submit" className="btn w-full" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
