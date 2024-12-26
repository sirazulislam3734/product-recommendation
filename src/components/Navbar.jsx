import React, { useContext, useState } from "react";
import img from "../assets/download (2).jpeg";
import Swal from "sweetalert2";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
// import { IconContext } from "react-icons";
import { TiDocumentAdd } from "react-icons/ti";
import { BsFilePerson } from "react-icons/bs";
import { LuGitPullRequestDraft } from "react-icons/lu";
import { TiUserAdd } from "react-icons/ti";
import { AuthContext } from "../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "success!",
          text: "User Log out successfully!",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "ERROR!",
          text: `${error.message}`,
          icon: "error",
        });
      });
  };

  return (
    <div>
      <div className="lg:px-16 md:px-8 px-2 bg-blue-300">
        <Helmet>
          <title>Navbar</title>
        </Helmet>
        <div className="navbar bg-blue-300">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li className="m-2 font-bold">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="m-2 font-bold">
                  <NavLink to="/queries">Queries</NavLink>
                </li>
                {user ? (
                  <>
                    <li className="m-2 font-bold">
                      <NavLink to="/recommendationsFor">
                        Recommendations For Me
                      </NavLink>
                    </li>
                    <li className="m-2 font-bold">
                      <NavLink to="/myQueries">My Queries</NavLink>
                    </li>
                    <li className="m-2 font-bold">
                      <NavLink to="/myRecommendations">
                        My recommendations
                      </NavLink>
                    </li>
                  </>
                ) : (
                  ""
                )}
              </ul>
            </div>
            <a className="flex items-center font-logo font-bold text-white md:text-2xl text-lg gap-3">
              {" "}
              Product Recommendation
            </a>
          </div>
          <div className="navbar-center lg:ml-12 hidden lg:flex">
            <ul className="menu menu-horizontal text-white px-1">
              <li className="m-2 lg:text-lg font-bold">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="m-2 lg:text-lg font-bold">
                <NavLink to="/queries">Queries</NavLink>
              </li>
              {user ? (
                <>
                  <li className="m-2 lg:text-lg font-bold">
                    <NavLink to="/recommendationsFor">
                      Recommendations For Me
                    </NavLink>
                  </li>
                  <li className="m-2 lg:text-lg font-bold">
                    <NavLink to="/myQueries">My Queries</NavLink>
                  </li>
                  <li className="m-2 lg:text-lg font-bold">
                    <NavLink to="/myRecommendations">
                      My recommendations
                    </NavLink>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
          </div>
          <div className="navbar-end">
          <button onClick={() => darkModeHandler()}>
            {
              dark && <IoSunny /> // render sunny when dark is true
            }
            {
              !dark && <IoMoon /> // render moon when dark is false
            }
          </button>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="m-1">
                    <button>
                      <img
                        className="w-10 h-10 border rounded-full object-cover"
                        src={user.photoURL}
                        alt=""
                      />
                    </button>
                  </div>
                  <div
                    tabIndex={0}
                    class="dropdown-content menu z-[1] md:w-96 p-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900"
                  >
                    <div className="rounded-t-lg h-32 overflow-hidden">
                      <img
                        className="object-cover object-top w-full"
                        src={img}
                        alt="Mountain"
                      />
                    </div>
                    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                      <img
                        className="object-cover object-center h-32"
                        src={user.photoURL}
                        alt="Woman looking front"
                      />
                    </div>
                    <div className="text-center mt-2">
                      <h2 className="font-semibold md:text-2xl text-sm">
                        Name: {user.displayName}
                      </h2>
                      <p className="text-gray-500 md:text-lg text-sm">
                        Email: {user.email}
                      </p>
                    </div>

                    <ul className="space-y-2 my-2 text-lg">
                      <li className="bg-slate-100 md:text-lg text-sm rounded-lg">
                        <Link to="/addQueries">
                          <TiDocumentAdd size={25} /> Add Queries
                        </Link>
                      </li>
                      <li className="bg-slate-100 md:text-lg text-sm rounded-lg">
                        <Link to="/myQueries">
                          <TiUserAdd size={25} /> My Queries
                        </Link>
                      </li>
                      <li className="bg-slate-100 md:text-lg text-sm rounded-lg">
                        <Link to="/myRecommendations">
                          <BsFilePerson size={20} /> My Recommendations
                        </Link>
                      </li>
                      <li className="bg-slate-100 md:text-lg text-sm rounded-lg">
                        <Link to="/recommendationsFor">
                          <LuGitPullRequestDraft size={20} /> Recommendations
                          For Me
                        </Link>
                      </li>
                    </ul>

                    <div class="lg:p-4 md:p-2 p-1 md:mx-8 mt-2">
                      <button
                        onClick={handleSignOut}
                        class="w-full block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <NavLink to="/login">
                <button className="lg:px-6 md:px-4 px-2 font-bold md:py-3 text-white md:text-lg hover:bg-white hover:text-sky-700 tran hover:rounded-xl flex items-center gap-2">
                  Login
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
