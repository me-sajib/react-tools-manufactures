import React from "react";
import Swal from "sweetalert2";

const AllProduct = ({ product, index, refetch }) => {
  // delete product api call
  const deleteProduct = (id) => {
    // show confirm
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure want to cancel this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      // is confirm button clicked
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/tools/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("access")}`,
          },
          body: JSON.stringify({ id }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire(
                "Deleted!",
                "Your product has been Deleted.",
                "success"
              );
              refetch();
            }
          });
      }
    });
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product?.name}</td>
      <td>${product?.price}</td>
      <td>{product?.available}</td>
      <td>
        <div className="avatar">
          <div className="w-8 rounded">
            <img src={product?.image} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>
        <button
          className="btn btn-secondary btn-xs"
          onClick={() => deleteProduct(product._id)}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default AllProduct;
