import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Meals from "./pages/Meals.jsx";
import Recipe from "./pages/Recipe.jsx";
import {Provider} from "react-redux"
import store from './store/store.js'
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import {CookiesProvider} from "react-cookie"
import Protected from "./components/AuthLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/meals",
        element: <Meals />,
      },
      {
        path: "/recipe/:mealId",
        element: (
          <Protected>
            <Recipe />
          </Protected>
        ),
      },
      {
        path: "/meals/recipe/:mealId",
        element: (
          <Protected>
            {" "}
            <Recipe />{" "}
          </Protected>
        ),
      },
      {
        path: "/login",
        element: (
          <Protected>
            <Login />
          </Protected>
        ),
      },
      {
        path: "/signup",
        element: (
          <Protected authentication={false}>
            {" "}
            <Signup />{" "}
          </Protected>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </CookiesProvider>
  </React.StrictMode>
);
