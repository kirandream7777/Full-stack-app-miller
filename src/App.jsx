import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
} from "./Pages";

import { Admin, AddJob, Stats, AllJobs, Profile } from "./small-Sidebar";
const App = () => {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "dashboard",
          element: <DashboardLayout />,
        },
      ],
    },
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <AddJob />,
        },
        { path: "stats", element: <Stats /> },
        {
          path: "all-jobs",
          element: <AllJobs />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "admin",
          element: <Admin />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;

// {
//   path: "/",
//   element: <HomeLayout />,
//   errorElement:<Error/>,
//   children: [
//     {
//       index:true,
//       element:<Landing/>
      
//     },
//     {
//       path: "register",
//       element: <Register />,
//     },
//     {
//       path: "login",
//       element: <Login />,
//     },

//     {
//       path: "dashboard",
//       element: <DashboardLayout />,
//     },
//   ],
// },



