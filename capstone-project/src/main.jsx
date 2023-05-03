import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home/HomeComponent.jsx";
import NavigationBar from "./routes/navigation/NavigationBar";
import { SignIn } from "./routes/sign-in/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationBar /> ,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/sign-in',
        element: <SignIn />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
