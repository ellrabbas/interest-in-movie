import React from 'react';
import Navbar from '../Layout/Navbar/Navbar';
import Footer from '../Layout/Footer/Footer';

function Layout({ children }) {
    return (
        <div className='bg-main text-white'>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;