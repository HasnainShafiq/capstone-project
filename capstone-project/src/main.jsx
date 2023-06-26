import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home/HomeComponent.jsx";
import NavigationBar from "./routes/navigation/NavigationBar";
import { SignIn } from "./routes/sign-in/SignIn";
import { Register } from "./routes/register/Register";
import { UserProvider } from "./contexts/user.context";
import { Shop } from "./routes/shop/Shop";
import { ProductsProvider } from "./contexts/products.context";
import { CartStateProvider } from "./contexts/cart.context";
import ProductPage from "./routes/product-page/ProductPage";
import { Checkout } from "./routes/checkout/CheckoutPage";

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
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/products/:productId",
        element: <ProductPage />
      },
      {
        path: "/identity/sign-in",
        element: <SignIn />,
      },
      {
        path: "/identity/register",
        element: <Register />,
      },
      {
        path: "/checkout",
        element: <Checkout />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Give all routes access to our currentUser and setCurrentUser values from our UserContext */}
    <UserProvider>
      <ProductsProvider>
        <CartStateProvider>
          <RouterProvider router={router}></RouterProvider>
        </CartStateProvider>
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>
);
