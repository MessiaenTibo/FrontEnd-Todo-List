import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// import "./assets/styles/screen.scss";
import "./assets/tailwind.css"
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Dashboard from "./routes/Dashboard";
import Settings from "./routes/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/settings",
    element: <Settings/>, // Meh...
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="max-w-screen-xl mx-auto px-8">

      <RouterProvider router={router}/>

      <AppFooter />
    </div>
  </React.StrictMode>
);
