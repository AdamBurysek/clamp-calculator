import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import { GlobalStateProvider } from "./context/GlobalStateContext.tsx";
import "./index.css";
import About from "./pages/About.tsx";
import Calculator from "./pages/Calculator.tsx";
import HowItWorks from "./pages/HowItWorks.tsx";

const Layout = () => (
  <>
    <Navbar />
    <main className="flex justify-center pt-16">
      <Outlet />
    </main>
  </>
);

const routes = [
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
];

export default routes;
