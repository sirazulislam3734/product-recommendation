import React, { useContext, useEffect, useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";

const MyRecommendations = () => {
  const { user } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/recommendations/${user?.email}`)
    .then((res) => {
      console.log(res.data);
      setRecommendations(res.data);
    });
  }, [user]);
  console.log(recommendations);
  return (
    <section className="container px-4 mx-auto my-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">My Recommendation</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          4 Bid
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <span>Deadline</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Price</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Category
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Status
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  <tr>
                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      title
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      deadline
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      $ price
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-2">
                        <p
                          className={`px-3 py-1  text-blue-500 bg-blue-100/60 text-xs  rounded-full`}
                        >
                          category
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div
                        className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                          status === "Completed"
                            ? "bg-green-100"
                            : "bg-green-100"
                        } ${
                          status === "Completed"
                            ? "text-green-500"
                            : "text-yellow-500"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full bg-yellow-500`}
                        ></span>
                        <h2 className={`text-sm font-normal`}>status</h2>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <button
                        // onClick={() =>
                        //   handleStatusChange(_id, status, "Completed")
                        // }
                        title="Mark Complete"
                        // disabled={status !== "In Progress"}
                        className="disabled:hover:cursor-not-allowed text-center text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none disabled:cursor-not-allowed"
                      >
                        <MdOutlineDeleteForever size={25} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyRecommendations;
