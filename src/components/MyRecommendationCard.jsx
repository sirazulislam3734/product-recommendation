import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";

const MyRecommendationCard = ({ recommendation}) => {
    const { title, email,photo,name, deadline, product_name, reason, } = recommendation || {};
  return (
    <tr>
      <td>
        <div class="flex items-center gap-3">
          <div class="flex-shrink-0 h-10 w-10">
            <img class="h-10 w-10 ml-3 rounded-full" src={photo} alt="" />
          </div>
          <div class="ml-4">
            <div class="text-sm font-medium text-gray-900 dark:text-white">
              {name}
            </div>
            <div class="text-sm text-gray-400">{email}</div>
          </div>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {title}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {deadline}
      </td>

      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <span
          className={`px-3 py-1 rounded-full text-blue-500 bg-blue-100/60 text-xs`}
        >
          {product_name}
        </span>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <p className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
            {reason.substring(0, 40)}...
          </p>
        </div>
      </td>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <span><MdOutlineDeleteForever size={25} /></span>
      </td>
    </tr>
  );
};

export default MyRecommendationCard;
 // <MdOutlineDeleteForever size={25} />