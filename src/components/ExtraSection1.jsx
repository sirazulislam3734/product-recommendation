import React from "react";
import { motion } from "motion/react"
import { Fade, Slide } from "react-awesome-reveal";
import bgImg from '../assets/image1.png'

const ExtraSection1 = () => {
  return (
    <div>
      <div class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <div class="w-full lg:w-1/2 lg:h-auto">
        <Fade direction="right">
          <img
            class="h-full w-full object-cover"
            src={bgImg}
            alt="Winding mountain road"
          />
          </Fade>
        </div>

        <div class="max-w-lg bg-white dark:bg-black dark:text-white md:max-w-2xl md:z-8 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
          <div class="flex flex-col lg:p-12 md:p-8 p-3 md:px-16">
            <h2 class="text-2xl font-medium uppercase text-blue-700 lg:text-4xl"
             >
            Product Recommendation
            System for Retail
            </h2>
            <Slide
            direction="up">
            <p class="mt-5">
            In today's information-driven digital environment, businesses and online platforms produce a wealth of information that, when used effectively, can increase user engagement, increase sales, and increase overall customer satisfaction. This solution aims to provide personalized information to users by leveraging the power of recommendations and offering products or suggestions that suit their interests and behaviours.
            </p>
            <div class="mt-4">
              <a
                href="https://www.linkedin.com/pulse/product-recommendation-system-retail-xenonstack-qfcuf/"
                class="inline-block w-full text-center text-lg font-medium text-gray-100 bg-blue-500 border-solid py-3 px-6 hover:bg-blue-800 hover:shadow-md md:w-48"
              >
                Read More
              </a>
            </div>
            </Slide>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection1;
