// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

import bgimg1 from "../assets/img1.jpeg";
import bgimg2 from "../assets/images2.jpeg";
import bgimg3 from "../assets/images3.jpeg";

export default function Carousel() {
  return (
    <div className="container py-10 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero-content lg:mx-20 md:mx-10 mx-3 flex-col lg:flex-row-reverse">
            <img
              src={bgimg1}
              className="w-full md:max-w-md h-52 rounded-lg shadow-2xl"
            />
            <div className="w-full">
              <h1 className="lg:text-5xl md:text-3xl text-2xl border-l-blue-500 border-l-8 md:pl-2 pl-1 font-bold lg:mb-4 md:mb-2 mb-1">
                Feature-based
              </h1>
              <h2 className="lg:text-3xl md:text-2xl text-xl font-bold">
                Recommendation system!
              </h2>
              <p className="lg:py-4 md:py-2 py-1">
                The explosive growth of the world-wide-web and the emergence of
                e-commerce has led to the development of recommender systems--a
                personalized information filtering technology used to identify a
                set of N items that will be of interest to a certain user.
              </p>
              <button class="flex overflow-hidden ring-[5px] ring-white w-[6rem] hover:w-[8.5rem] items-center gap-3 cursor-pointer bg-gradient-to-r from-violet-500 to-blue-500 text-white font-bold px-5 py-2 rounded-xl transition-all ease-in-out hover:scale hover:scale-105 font-[revert] active:scale-100 shadow-lg">
                Explore
                <svg
                  class="size-6 mt-0.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-content lg:mx-20 md:mx-10 mx-3 flex-col lg:flex-row-reverse">
            <img
              src={bgimg2}
              className="w-full md:max-w-md h-52 rounded-lg shadow-2xl"
            />
            <div className="w-full">
              <h1 className="lg:text-5xl md:text-3xl text-2xl border-l-blue-500 border-l-8 md:pl-2 pl-1 font-bold lg:mb-4 md:mb-2 mb-1">
                Multi Clustering
              </h1>
              <h2 className="lg:text-3xl md:text-2xl text-xl font-bold">
                {" "}
                Recommendation System for Fashion Retail!
              </h2>
              <p className="lg:py-4 md:py-2 py-1">
                Personalized Career Counseling provides tailored guidance to
                help individuals identify their unique strengths, interests, and
                goals. Through one-on-one sessions, we explore career
                opportunities, build actionable plans, and empower clients to
                make confident, informed decisions about their professional
                future.
              </p>
              <button class="flex overflow-hidden ring-[5px] ring-white w-[6rem] hover:w-[8.5rem] items-center gap-3 cursor-pointer bg-gradient-to-r from-violet-500 to-blue-500 text-white font-bold px-5 py-2 rounded-xl transition-all ease-in-out hover:scale hover:scale-105 font-[revert] active:scale-100 shadow-lg">
                Explore
                <svg
                  class="size-6 mt-0.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-content lg:mx-20 md:mx-10 mx-3 flex-col lg:flex-row-reverse">
            <img
              src={bgimg3}
              className="w-full md:max-w-md h-52 rounded-lg shadow-2xl"
            />
            <div className="w-full">
              <h1 className="lg:text-5xl md:text-3xl text-2xl border-l-blue-500 border-l-8 md:pl-2 pl-1 font-bold lg:mb-4 md:mb-2 mb-1">
                Product collection
              </h1>
              <h2 className="lg:text-3xl md:text-2xl text-xl font-bold">
                Recommendation in online retail!
              </h2>
              <p className="lg:py-4 md:py-2 py-1">
                Your Career, Your Path offers customized career counseling to
                help you take control of your professional journey. We work with
                you to understand your aspirations, strengths, and values,
                providing expert guidance and actionable strategies to help you
                achieve your career goals with confidence and clarity.
              </p>
              <button class="flex overflow-hidden ring-[5px] ring-white w-[6rem] hover:w-[8.5rem] items-center gap-3 cursor-pointer bg-gradient-to-r from-violet-500 to-blue-500 text-white font-bold px-5 py-2 rounded-xl transition-all ease-in-out hover:scale hover:scale-105 font-[revert] active:scale-100 shadow-lg">
                Explore
                <svg
                  class="size-6 mt-0.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
