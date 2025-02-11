// const {axios} = require('axios')
import axios from 'axios';
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from 'react-helmet';

const AddQueries = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const handleAddQueries = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const addQueriesData = Object.fromEntries(formData.entries());
    addQueriesData.userData = { email:user?.email, name:user?.displayName, photo:user?.photoURL,}
    addQueriesData.recommendation_count = 0;
    console.log(addQueriesData)
    
    axios.post('https://product-recommendation-server-beta.vercel.app/addQueries', addQueriesData)
    .then(res => { 
        console.log(res.data);
        e?.target?.reset()
    if(res.data.insertedId){
      Swal.fire({
        title: "success!",
        text: "Queries Added Successfully!",
        icon: "success"
      });
      navigate('/myQueries')
    }
    })
  };
  return (
    <div>
      <Helmet>
        <title>Add Queries</title>
      </Helmet>
      <div className="lg:flex lg:pt-32 justify-center px-3 items-center min-h-[calc(100vh-306px)] my-12">
        <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
          <h2 className="text-3xl text-center md:my-5 font-semibold text-gray-700 capitalize ">
            Add Queries
          </h2>

          <form onSubmit={handleAddQueries}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 ">Product Name</label>
                <input
                  name="product_name"
                  type="text"
                  placeholder="Name"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 ">Product Brand</label>
                <input
                  name="product_brand"
                  type="text"
                  placeholder="Brand"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="query_title">
                  Query Title
                </label>
                <input
                  id="query_title"
                  name="title"
                  placeholder="Title"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="emailAddress">
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700">Deadline</label>

                {/* Date Picker Input Field */}
                <DatePicker
                  className="border p-2 rounded-md"
                  name="deadline"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div>
                <label className="text-gray-700 ">Product Image-URL</label>
                <input
                  type="url"
                  name="photo"
                  placeholder="Image url"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label className="text-gray-700 " htmlFor="description">
                Boycotting Reason
              </label>
              <textarea
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                name="Boycotting"
                id="description"
                placeholder="Details"
              ></textarea>
            </div>
            <div className="flex justify-center w-full mt-6">
              <button className="disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Add Queries
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddQueries;
