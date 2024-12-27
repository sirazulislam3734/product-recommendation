import React, { useContext, useEffect, useState } from "react";
import noData from "../assets/noData.json";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import MyRecommendationCard from "../components/MyRecommendationCard";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import { Slide } from "react-awesome-reveal";

const MyRecommendations = () => {
  const { user } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);
  useEffect(() => {
    axios.get(`https://product-recommendation-server-beta.vercel.app/recommendations/${user?.email}`)
    .then(res => {
      setRecommendations(res.data);
    });
  }, [user]);
  return (
    <section className="container px-4 dark:bg-black dark:text-white mx-auto my-12">
      <Helmet>
        <title>My Recommendation</title>
      </Helmet>
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white ">My Recommendation</h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
            {recommendations.length} Recommendation
          </span>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                {recommendations.length > 0 ?
                 <><table className="min-w-full divide-y dark:bg-black dark:text-white divide-gray-200">
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
                        recommendations={recommendations}
                        setRecommendations={setRecommendations}
                        ></MyRecommendationCard>)
                   }
                   
                 </tbody>
               </table></> 
                 :<>
                 <Lottie animationData={noData}></Lottie>
                 </>}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default MyRecommendations;
