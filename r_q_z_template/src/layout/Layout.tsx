import { Outlet } from "react-router-dom";

import Footer from "../layout/Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-linear-to-r from-purple-900 via-indigo-800 to-blue-800">
      <Header />
      <main className="grow transition-all duration-500 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
