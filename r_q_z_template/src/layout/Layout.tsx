import { Outlet } from "react-router-dom";

import Footer from "../layout/Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen text-theme-text overflow-x-hidden transition-colors duration-300">
      <Header />
      <main className="grow pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
