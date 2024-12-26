import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import DatePicker from "react-datepicker";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const QueriesDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [recommendations, setRecommendations] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/addQueries`).then((res) => {
      const newData = res.data?.filter(
        (recommendation) => recommendation._id === id
      );
      setRecommendations(newData[0]);
    });
  }, [recommendations]);

  const {
    Boycotting,
    userData,
    _id,
    deadline,
    product_name,
    product_brand,
    photo,
    email,
    title,
  } = recommendations || {};

  const handleAddRecommendation = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const addRecommendationData = Object.fromEntries(formData.entries());
    addRecommendationData.queryID = _id;
    addRecommendationData.queryTitle = title;
    addRecommendationData.queryProductName = product_name;
    addRecommendationData.queryUserEmail = userData?.email;
    addRecommendationData.queryUserName = userData?.name;
    console.log(addRecommendationData);
    axios
      .post("http://localhost:4000/recommendations", addRecommendationData)
      .then((res) => {
        Swal.fire({
          title: "ERROR",
          text: `${res.data}`,
          icon: "error",
        });
        if (res.data.insertedId) {
          Swal.fire({
            title: "Good Job",
            text: "Recommendation Added Successfully!",
            icon: "success",
          });
          navigate("/myRecommendations");
        }
      });
  };
  return (
    <div>
        <Helmet>
        <title>Queries Details</title>
        </Helmet>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="lg:h-[600px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={photo}
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Deadline : {deadline}
              </h2>
              <div className="flex mb-2">
                <div className="mr-10 flex-1">
                  <span className="font-bold text-gray-700 text-lg dark:text-gray-300">
                    Email : {email}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 text-lg dark:text-gray-300">
                    Product Name :
                  </span>
                  <span className="text-gray-600 ml-1 dark:text-gray-300">
                    {product_name}
                  </span>
                </div>
              </div>
              <div className="flex mb-2">
                <div className=" flex-1">
                  <span className="font-bold text-gray-700 text-lg dark:text-gray-300">
                    Product Brand :
                  </span>
                  <span className="text-gray-600 ml-1 dark:text-gray-300">
                    {product_brand}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 text-lg dark:text-gray-300">
                    Queries Title :
                  </span>
                  <span className="text-gray-600 ml-1 dark:text-gray-300">
                    {title}
                  </span>
                </div>
              </div>
              <div>
                <span className="font-bold text-lg text-gray-700 dark:text-gray-300">
                  Boycotting Reason :
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {Boycotting}
                </p>
              </div>
              <div>
                <p className="mt-3 mb-0 text-lg font-bold text-gray-600 ">
                  Recommendation Person Details :
                </p>
                <div className="flex items-center md:gap-10 gap-5">
                  <div>
                    <p className="text-sm text-gray-600 ">
                      <span className="md:text-lg">
                        <span className="text-black font-bold">Name :</span>{" "}
                        {userData?.name}
                      </span>
                    </p>
                    <p className="text-sm text-gray-600 ">
                      <span className="lg:text-lg">
                        <span className=" font-bold text-black">Email :</span>{" "}
                        {userData?.email}
                      </span>
                    </p>
                  </div>
                  <div className="rounded-full object-cover overflow-hidden w-20 h-20">
                    <img src={userData?.photo} alt="" />
                  </div>
                </div>
              </div>
              <form onSubmit={handleAddRecommendation}>
                <div className="grid grid-cols-1 gap-6 mt-3 mb-3 sm:grid-cols-2">
                  <div>
                    <label className="text-gray-700 ">Username</label>
                    <input
                      name="name"
                      placeholder="Your Name"
                      type="text"
                      value={user?.displayName}
                      className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 ">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={user?.email}
                      placeholder="Your Email"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 ">
                      Recommendation Title
                    </label>
                    <input
                      name="title"
                      placeholder="Title"
                      type="text"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 ">Product Name</label>
                    <input
                      name="product_name"
                      type="text"
                      placeholder="Name"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label className="text-gray-700">Deadline</label>

                    {/* Date Picker Input Field */}
                    <DatePicker
                      className="border p-2 mt-0 rounded-md"
                      name="deadline"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 ">
                      Recommendation reason
                    </label>
                    <input
                      name="reason"
                      type="text"
                      placeholder="Reason"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-gray-700">Product Image-URL</label>
                  <input
                    type="url"
                    name="photo"
                    placeholder="Image url"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
                <button className="w-full px-6 py-2 bg-black text-white mt-3 rounded-lg font-bold">
                  Add Recommendation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueriesDetails;
