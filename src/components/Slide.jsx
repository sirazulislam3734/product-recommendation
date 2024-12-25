/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const Slide = ({ image }) => {
  return (
    <div
      className='w-full bg-center bg-cover h-[38rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
      {/* <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
            <div className="hero-content lg:mx-20 md:mx-10 mx-3 flex-col lg:flex-row-reverse">
              <img
                src=""
                className="w-full md:max-w-md h-52 rounded-lg shadow-2xl"
              />
              <div className="w-full">
                <h1 className="lg:text-5xl md:text-3xl text-2xl border-l-blue-500 border-l-8 md:pl-2 pl-1 font-bold lg:mb-4 md:mb-2 mb-1">Pathfinder</h1>
                <h2 className="lg:text-3xl md:text-2xl text-xl font-bold">Empowering Careers, Inspiring Futures!</h2>
                <p className="lg:py-4 md:py-2 py-1">
                A Career Counseling Website is an online platform designed to guide individuals in making informed career decisions. It offers tools like personality assessments, career planning resources, expert advice, and job market insights to help users explore opportunities, set goals, and achieve professional success.
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
            </div> */}
      </div>
    </div>
  )
}

export default Slide
