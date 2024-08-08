import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { GlobalStateProvider } from "../providers/GlobalStateProvider";
import Footer from "../components/Footer";

const Layout = () => (
  <GlobalStateProvider>
    <Navbar />
    <main className="flex justify-center pt-16">
      <Outlet />
    </main>
    <Footer />
  </GlobalStateProvider>
);

export default Layout;
