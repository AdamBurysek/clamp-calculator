import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { GlobalStateProvider } from "../providers/GlobalStateProvider";

const Layout = () => (
  <GlobalStateProvider>
    <Navbar />
    <main className="flex justify-center pt-16">
      <Outlet />
    </main>
  </GlobalStateProvider>
);

export default Layout;
