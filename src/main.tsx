import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar.tsx";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./pages/About.tsx";
import HowItWorks from "./pages/HowItWorks.tsx";
import Calculator from "./pages/Calculator.tsx";
import { GlobalStateProvider } from "./context/GlobalStateContext.tsx";

const Layout = () => (
  <>
    <Navbar />
    <main className="flex justify-center pt-16">
      <Outlet />
    </main>
  </>
);

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <GlobalStateProvider>
              <Calculator />
            </GlobalStateProvider>
          ),
        },
        {
          path: "/how-it-works",
          element: <HowItWorks />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ],
  {
    basename: "/cc/",
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
