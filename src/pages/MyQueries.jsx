import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import noDataImg from "../assets/noData.json";
import { AuthContext } from "../providers/AuthProvider";
import ProductCard from "../components/ProductCard";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import { Slide } from "react-awesome-reveal";

const MyQueries = () => {
  const { user } = useContext(AuthContext); // Get the user from the context
  const [queries, setQueries] = useState([]); // State for storing queries
  const [sortOrder, setSortOrder] = useState(""); // State for sorting

  // Fetch user-specific queries
  useEffect(() => {
    if (user?.email) {
      const fetchData = async () => {
        try {
          const res = await axios.get(
            `https://product-recommendation-server-beta.vercel.app/addQueries/${user.email}`
          );
          setQueries(res.data);
        } catch (error) {
          console.error("Error fetching queries:", error);
        }
      };
      fetchData();
    }
  }, [user]); // Trigger only when the user changes

  // Sort queries by deadline
  const sortedQueries = [...queries].sort((a, b) => {
    if (sortOrder === "asc") {
      return new Date(a.deadline) - new Date(b.deadline);
    } else if (sortOrder === "desc") {
      return new Date(b.deadline) - new Date(a.deadline);
    }
    return 0; // No sorting
  });

  return (
    <div className="lg:px-16 lg:pt-16 md:px-8 px-2">
      <Helmet>
        <title>My Queries</title>
      </Helmet>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-20">
        <div className="relative mx-auto isolate overflow-hidden bg-white dark:bg-black dark:text-white px-6 py-20 text-center sm:rounded-3xl sm:border sm:border-gray-100 sm:px-16 sm:shadow-sm">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">
            Add Query !
          </h2>

          <h3 className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-500">
            If you have any questions, you can go here
          </h3>

          <div className="mt-8 flex items-center justify-center gap-x-6">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              href="/addQueries"
            >
              Click Here
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fill-opacity="0.7"
            ></circle>
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stop-color="#3b82f6"></stop>
                <stop offset="1" stop-color="#1d4ed8"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      {/* Header Section */}
      <div className="flex justify-between items-center lg:px-10 md:px-5 px-2 my-5">
        <div>
          <h2 className="lg:text-4xl md:text-2xl text-xl">My Queries</h2>
        </div>
        <div>
          <select
            name="category"
            id="category"
            className="border p-4 rounded-md"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort By Deadline</option>
            <option value="desc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div>
      </div>
      <div className="flex items-center gap-x-3 lg:px-10 md:px-5 px-2 my-5">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white">
          My Queries
        </h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {queries.length} Queries
        </span>
      </div>
      {queries.length > 0 ? (
        <>
          {/* Queries Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:px-5 px-2 md:my-10 my-5">
            <Slide direction="right">
              {sortedQueries.map((query) => (
                <ProductCard
                  key={query._id}
                  setQueries={setQueries}
                  query={query}
                  queries={queries}
                />
              ))}
            </Slide>
          </div>
        </>
      ) : (
        <>
          <Lottie animationData={noDataImg}></Lottie>
        </>
      )}
    </div>
  );
};

export default MyQueries;
