import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { GlobalStateProvider } from "../providers/GlobalStateProvider";

const Layout = () => (
  <GlobalStateProvider>
    <Navbar />
    <main className="flex justify-center pb-12 pt-16">
      <Outlet />
    </main>
    <Footer />
  </GlobalStateProvider>
);

export default Layout;
