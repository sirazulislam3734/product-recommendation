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
            <span className="text-black dark:text-white font-semibold">
              Pro_Name:
            </span>{" "}
            {product_name}
          </span>
          <span className="text-gray-400 flex-1 ml-5">
            <span className="text-black dark:text-white font-semibold">
              Pro_Brand:
            </span>{" "}
            {product_brand}
          </span>

          <p className="text-gray-400 text-lg">
            <span className="text-black dark:text-white font-semibold">
              Email:
            </span>{" "}
            {email}
          </p>

          <p className="text-gray-400 flex-1">
            <span className="text-black dark:text-white font-semibold">
              Query Title:
            </span>{" "}
            {title}
          </p>
          <p className="text-gray-400 flex-1">
            <span className="text-black dark:text-white font-semibold">
              Date:
            </span>{" "}
            {deadline}
          </p>

          <p className="text-gray-400 text-lg">
            <span className="text-black dark:text-white font-semibold">
              Boycotting Reason:
            </span>{" "}
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
        <svg
          class="group-hover:opacity-100 opacity-0 transition-opacity absolute right-[10px] bottom-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="64"
          viewBox="0 0 45 64"
          fill="none"
        >
          <path
            d="M5.67927 0.685928C5.66838 0.658706 5.65749 0.636925 5.65749 0.636925L3.81168 1.12696C5.55403 11.7281 0.588324 15.4905 0.375974 15.6484L1.49217 17.2056C1.69363 17.0641 5.49414 14.2654 6.03318 7.14353C9.0333 14.2545 13.0244 20.1731 17.1298 24.774C17.059 24.8774 16.9882 24.9754 16.9229 25.0789C14.3311 29.0645 14.0861 34.651 16.1933 41.6912C18.6271 49.8203 24.5239 57.748 32.3754 63.4434L33.5025 61.8916C25.9886 56.4358 20.3477 48.8729 18.0336 41.1358C16.1388 34.8089 16.2913 29.6526 18.4692 26.2114C21.7035 29.5927 24.9432 32.1518 27.7636 33.8288C33.8945 37.4659 38.2232 36.377 40.2541 35.4078C42.4919 34.3406 44.1254 32.375 44.414 30.4094C44.4575 30.1099 44.4793 29.805 44.4793 29.5001C44.4793 27.5509 43.5864 25.5853 41.9039 23.8756C38.4628 20.3691 32.713 18.7465 26.5276 19.5306C23.1518 19.9607 20.3695 21.2457 18.3603 23.2821C14.4455 18.8554 10.645 13.1655 7.77554 6.34314C9.95348 8.22706 13.2476 10.2199 18.1425 11.5266L18.638 9.67539C9.24565 7.16531 6.28364 1.94369 5.75005 0.838382C5.73371 0.783935 5.71193 0.729488 5.6956 0.669594L5.67382 0.669594L5.67927 0.685928ZM26.7672 21.4308C33.3555 20.5923 38.2014 22.8411 40.5372 25.215C42.0509 26.7559 42.7533 28.5037 42.5192 30.1317C42.3558 31.2425 41.3431 32.767 39.4319 33.6763C37.744 34.4822 34.1069 35.3642 28.7437 32.179C25.9886 30.5455 22.8197 28.03 19.6617 24.6923C21.7797 22.5035 24.6056 21.6976 26.7726 21.4254L26.7672 21.4308Z"
            fill="#F04E29"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProductCard;
