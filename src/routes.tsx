import About from "./pages/About.tsx";
import Calculator from "./pages/Calculator.tsx";
import HowItWorks from "./pages/HowItWorks.tsx";
import Layout from "./pages/Layout.tsx";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Calculator />,
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
