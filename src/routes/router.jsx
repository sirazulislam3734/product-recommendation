import { createBrowserRouter } from "react-router-dom";
import MainLayOuts from "../layouts/MainLayOuts";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Queries from "../pages/Queries";
import MyQueries from "../pages/MyQueries";
import MyRecommendations from "../pages/MyRecommendations";
import RecommendationsForMe from "../pages/RecommendationsForMe";
import AddQueries from "../pages/AddQueries";
import PrivateRoute from "./PrivateRoute";
import Home from "../components/Home";
import QueriesDetails from "../pages/QueriesDetails";
import Update from "../pages/Update";
import ErrorPage from "../pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts></MainLayOuts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/queries",
        element: <Queries />,
        loader: () => fetch('http://localhost:4000/addQueries')
      },
      {
        path: "/recommendationsFor",
        element: <PrivateRoute><RecommendationsForMe /></PrivateRoute>,
      },
      {
        path: "/myQueries",
        element: <PrivateRoute><MyQueries /></PrivateRoute>,
      },
      {
        path: "/addQueries",
        element: <PrivateRoute><AddQueries /></PrivateRoute>,
      },
      {
        path: "/myRecommendations",
        element: <PrivateRoute><MyRecommendations /></PrivateRoute>,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/queryDetails/:id",
        element: <PrivateRoute><QueriesDetails /></PrivateRoute>,
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><Update /></PrivateRoute>,
        loader: () => fetch('http://localhost:4000/addQueries')
      },
    ],
  },
]);

export default router;
