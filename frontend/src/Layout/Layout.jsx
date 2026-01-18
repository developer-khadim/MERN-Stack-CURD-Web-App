import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50/30">
            {/* Navbar - Fixed at the top */}
            <Navbar />

            <main className="flex-grow pt-24 px-4 w-full max-w-screen-xl mx-auto">
                <div className="w-full h-full animate-fade-in-up">
                    {children}
                </div>
            </main>

            {/* Footer - Stays at the bottom */}
            <Footer />
        </div>
    );
};

export default Layout;