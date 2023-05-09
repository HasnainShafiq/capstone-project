import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home/HomeComponent.jsx";
import NavigationBar from "./routes/navigation/NavigationBar";
import { SignIn } from "./routes/sign-in/SignIn";
import { Register } from "./routes/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationBar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/identity/sign-in",
        element: <SignIn />,
      },
      {
        path: "/identity/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
