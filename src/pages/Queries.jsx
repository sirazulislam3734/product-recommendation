import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Slide } from "react-awesome-reveal";

const Queries = () => {
  const initialData = useLoaderData();
  const [queries, setQueries] = useState(initialData); // State for filtered queries
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // State for sorting

  // Fetch data dynamically based on search query and sort order
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://product-recommendation-server-beta.vercel.app/addQueries`, {
          params: { searchParams: search, sortOrder },
        });
        setQueries(res.data);
      } catch (error) {
        console.error("Error fetching queries:", error);
      }
    };
    fetchData();
  }, [search, sortOrder]); // Trigger effect on search or sortOrder change

  // Reset filters
  const handleReset = () => {
    setSearch("");
    setSortOrder("");
    setQueries(initialData); // Reset to initial loader data
  };
  
  return (
    <div className="container md:pt-32 pt-20 px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between">
        <Helmet>
            <title>All Queries</title>
        </Helmet>
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Enter Queries Product Name"
                aria-label="Enter Queries Product Name"
              />
              <button
                type="submit"
                className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
              >
                Search
              </button>
            </div>
          </form>
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
          <button className="btn" onClick={handleReset}>
            Reset
          </button>
        </div>
        <div className="grid grid-cols-1 gap-5 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3">
          <Slide
            direction="up"
            triggerOnce
            duration="1000">
          {queries.map((query) => (
            <ProductCard key={query._id} query={query}></ProductCard>
          ))}
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Queries;
