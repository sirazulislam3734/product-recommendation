import React from "react";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaRProject } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const ExtraSection2 = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-white md:px-8 lg:px-12">
      <Fade direction="up">
      <div className="lg:w-3/5 text-center mx-auto lg:my-10 md:my-5 my-3">
        <h2 className="text-2xl lg:text-4xl font-bold text-blue-700 md:text-3xl">Powerful Development Tools</h2>
        <p className="text-gray-600 dark:text-white"> "Access a comprehensive suite of features designed to streamline your development process, whether you're prototyping new ideas, implementing complex functionalities, or creating production-ready solutions."</p>
      </div>
      </Fade>
      <div className="relative lg:flex space-y-3 gap-5 justify-between md:px-5 px-3 items-center overflow-hidden bg-gray-50 dark:bg-gray-800 dark:text-white py-6 sm:py-8">
        <Fade direction="up">
        <div className="group relative rounded-xl cursor-pointer overflow-hidden bg-white dark:bg-gray-800 dark:text-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 px-6 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
          <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
          <div class="relative z-10 mx-auto max-w-md">
            <span class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
              <FaHandHoldingUsd
                class="h-10 w-10 text-white transition-all"
              />
            </span>
            <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <p>
              "Ideal for rapid cost-effective development, testing financial features, and building budget-friendly MVPs that demonstrate value to stakeholders."
              </p>
            </div>
            <div class="pt-5 text-base font-semibold leading-7">
              <p>
                <a
                  href="#"
                  class="text-sky-500 transition-all duration-300 group-hover:text-white"
                >
                  Read the docs &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
        </Fade>
        <Fade direction="up">
        <div className="group relative rounded-xl cursor-pointer overflow-hidden bg-white dark:bg-gray-800 dark:text-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 px-6 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
          <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
          <div class="relative z-10 mx-auto max-w-md">
            <span class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-10 w-10 text-white transition-all"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
            </span>
            <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <p>
              "Great for implementing real-time communication features, exploring interactive components, and creating engaging user feedback systems."
              </p>
            </div>
            <div class="pt-5 text-base font-semibold leading-7">
              <p>
                <a
                  href="#"
                  class="text-sky-500 transition-all duration-300 group-hover:text-white"
                >
                  Read the docs &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
        </Fade>
        <Fade direction="up">
        <div className="group relative rounded-xl cursor-pointer overflow-hidden bg-white dark:bg-gray-800 dark:text-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 px-6 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
          <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
          <div class="relative z-10 mx-auto max-w-md">
            <span class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
              <FaRProject class="h-10 w-10 text-white transition-all" />
            </span>
            <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <p>
              "Excellent for data analysis projects, statistical modeling implementations, and building sophisticated analytical tools with R integration."
              </p>
            </div>
            <div class="pt-5 text-base font-semibold leading-7">
              <p>
                <a
                  href="#"
                  class="text-sky-500 transition-all duration-300 group-hover:text-white"
                >
                  Read the docs &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default ExtraSection2;
