import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => (
  <>
    <Navbar />
    <main className="flex justify-center pt-16">
      <Outlet />
    </main>
  </>
);

export default Layout;
