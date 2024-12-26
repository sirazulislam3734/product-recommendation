import React, { useContext, useEffect, useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import MyRecommendationCard from "../components/MyRecommendationCard";

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
            {recommendations.length} Recommendation
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
                          <span>Name & Email</span>
                        </div>
                      </th>
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
                        <button className="flex items-center gap-x-2">
                        <span>Deadline</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                        <span>Product_Name</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                        Reason
                      </th>

                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                       Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {
                      recommendations.map(recommendation => <MyRecommendationCard
                         key={recommendation._id}
                         recommendation={recommendation}
                         ></MyRecommendationCard>)
                    }
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
