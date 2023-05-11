import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home/HomeComponent.jsx";
import NavigationBar from "./routes/navigation/NavigationBar";
import { SignIn } from "./routes/sign-in/SignIn";
import { Register } from "./routes/register/Register";
import { UserProvider } from "./contexts/user.context";

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
    {/* Give all routes access to our currentUser and setCurrentUser values from our UserContext */}
    <UserProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  </React.StrictMode>
);
