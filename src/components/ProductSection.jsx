import React from "react";
import ProductCard from "./ProductCard";

const ProductSection = ({data}) => {

  return (
    <div>
      <div className="sm:p-16">
        <div class="dark:bg-gray-900 border md:p-5 p-3 rounded-xl dark:text-white text-black">
          <h2 className="text-2xl text-center lg:my-8 md:my-4  md:mx-10 mx-5 my-2 font-bold">
            Select a Product section to get started
          </h2>
          <div className="grid grid-cols-1 gap-5 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {data.map((query) => (
            <ProductCard key={query._id} query={query}></ProductCard>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
