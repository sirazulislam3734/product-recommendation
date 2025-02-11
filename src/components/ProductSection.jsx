import React from "react";
import ProductCard from "./ProductCard";
import { Slide } from "react-awesome-reveal";

const ProductSection = ({ data }) => {
  return (
    <div>
      <div className="sm:p-8">
        <div class="dark:bg-gray-900 border md:p-5 p-3 rounded-xl dark:text-white text-black">
          <h2 className="text-2xl text-center lg:my-8 md:my-4  md:mx-10 mx-5 my-2 font-bold">
            Select a Product section to get started
          </h2>
          <div className="grid grid-cols-1 gap-5 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3">
            <Slide
              direction="left"
              triggerOnce
              duration="1000">
            {data.slice(0,5).map((query) => (
              <ProductCard
                key={query._id}
                // setQueries={setQueries}
                // queries={queries}
                query={query}
              ></ProductCard>
            ))}
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
