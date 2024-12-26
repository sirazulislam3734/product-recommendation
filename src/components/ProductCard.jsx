import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductCard = ({ query, setQueries, queries }) => {
  const {
    Boycotting = "",
    _id,
    deadline,
    product_name = "N/A",
    product_brand = "N/A",
    photo = "https://via.placeholder.com/150", // Fallback image
    email,
    title = "N/A",
    recommendation_count = 0,
  } = query || {};

  const handleDeleteBtn = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:4000/delete/${id}`)
          .then((res) => {
            if (res.status === 200) {
              Swal.fire("Deleted!", "Your Queries deleted.", "success");

              // Update state to remove the deleted item
              const updatedQueries = queries.filter((item) => item._id !== id);
              setQueries(updatedQueries);
            } else {
              Swal.fire(
                "Error!",
                "There was a problem deleting the query.",
                "error"
              );
            }
          })
          .catch(() => {
            Swal.fire(
              "Error!",
              "There was a problem deleting the query.",
              "error"
            );
          });
      }
    });
  };

  return (
    <div className="">
      <div className="group hover:saturate-100 saturate-0 rounded-xl transition-[filter] relative bg-[#FAEDE4] dark:bg-gray-800 dark:text-white font-['Robot_Flex'] border-b-2 lg:p-5 md:p-3 p-5 border-b-[#F04E29]">
        <img
          className="group-hover:rounded-br-[100px] h-96 mb-2 w-full rounded-xl rounded-br-[0px] transition-[border-radius]"
          src={photo}
          alt="Product"
        />
        <div className="">
          <span className="text-gray-400 flex-1 mr-5">
            <span className="text-black dark:text-white font-semibold">Pro_Name:</span>{" "}
            {product_name}
          </span>
          <span className="text-gray-400 flex-1 ml-5">
            <span className="text-black dark:text-white font-semibold">Pro_Brand:</span>{" "}
            {product_brand}
          </span>

          <p className="text-gray-400 text-lg">
            <span className="text-black dark:text-white font-semibold">Email:</span> {email}
          </p>

          <p className="text-gray-400 flex-1">
            <span className="text-black dark:text-white font-semibold">Query Title:</span>{" "}
            {title}
          </p>
          <p className="text-gray-400 flex-1">
            <span className="text-black dark:text-white font-semibold">Date:</span> {deadline}
          </p>

          <p className="text-gray-400 text-lg">
            <span className="text-black dark:text-white font-semibold">Boycotting Reason:</span>{" "}
            {Boycotting?.substring(0, 15) || "N/A"}...
          </p>
          <span className="text-gray-400 text-lg">
            <span className="text-black dark:text-white font-semibold">
              Recommendation-count:
            </span>{" "}
            ({recommendation_count})
          </span>
        </div>
        <div className="space-x-3 mt-3">
          <Link to={`/queryDetails/${_id}`}>
            <button className="px-6 py-2 font-serif hover:text-white mb-2 hover:bg-black border-gray-700 rounded-xl text-lg border">
              Details
            </button>
          </Link>
          <Link to={`/update/${_id}`}>
            <button className="px-6 py-2 font-serif hover:text-white hover:bg-green-400 mb-2 border-gray-700 rounded-xl text-lg border">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDeleteBtn(_id)}
            className="px-6 py-2 font-serif hover:text-white mb-2 hover:bg-red-400 border-gray-700 rounded-xl text-lg border"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
