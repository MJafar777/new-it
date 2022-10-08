import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
// layouts
import MainLayout from "../layouts/main";
// components
import LoadingScreen from "../components/LoadingScreen";
// Vacancy
import Vacancy from "../components/Vacancy/Vacancy";

import Vacancyid from "../components/Vacancy/VacancyId/Vacancyid";
import ProductDetails from "../layouts/Redux/containers/ProductDetails/ProductDetails";
import { element } from "prop-types";
import Error from "../components/Error/Error";
const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen isDashboard={false} />}>
      <Component {...props} />
    </Suspense>
  );

const Login = Loadable(lazy(() => import("../pages/auth/SignIn/SignIn")));
const Register = Loadable(lazy(() => import("../pages/auth/SignUp/SignUp")));

// main layout
const HomePage = Loadable(lazy(() => import("../pages/Home")));

export default function Goo() {
  return useRoutes([
    {
      path: "auth",
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [{ element: <HomePage />, index: true }],
    },
    {
      path: "/vacancy",
      element: <Vacancy />,
      children: [{ element: <Vacancy />, index: true }],
    },
    {
      path: "/vacancyid",
      element: <Vacancyid />,
      children: [{ element: <Vacancyid />, index: true }],
    },
    {
      path: "/product/12",
      element: <ProductDetails />,
      // children: [{ element: <ProductDetails />, path: "/12" }],iii
    },
    // { path: "*", element: <Navigate to="/404" replace /> },
    { path: "/*", element: <Error /> },
  ]);
}
