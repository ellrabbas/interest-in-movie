import React from "react";
import Navbar from "../Layout/Navbar/Navbar";
import Footer from "../Layout/Footer/Footer";
import MobileFooter from "./Footer/MobileFooter";

function Layout({ children }) {
    return (
        <div className="bg-main text-white">
            <Navbar />
            {children}
            <Footer />
            <MobileFooter />
        </div>
    );
}

export default Layout;
