import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import RecommendationCard from "../components/RecommendationCard";

const RecommendationsForMe = () => {
  const { user } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/recommendations/${user?.email}?recommendation=true`, {withCredentials: true})
    .then((res) => {
      setRecommendations(res.data);
    });
  }, [recommendations, user]);
  return (
    <div>
      <section className="container lg:p-5 dark:bg-black dark:text-white px-4 mx-auto my-12">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">Recommendation Requests</h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
            {recommendations.length} Requests
          </span>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y dark:bg-gray-800 dark:text-white divide-gray-200">
                  <thead className="bg-gray-50 dark:bg-black dark:text-white">
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
                        <span>Email</span>
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
                      
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-black dark:text-white divide-y divide-gray-200 ">
                    {
                      recommendations.map(recommendation => <RecommendationCard
                         key={recommendation._id}
                         recommendation={recommendation}
                         ></RecommendationCard>)
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecommendationsForMe;
