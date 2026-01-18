import React, { useState } from 'react';
import { Github, Linkedin, Globe, Menu, X, Mail } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const socialLinks = [
        {
            name:'Email',
            url: 'mailto:khadimalisoomro33@gmail.com',
            icon: <Mail className="w-5 h-5" />,
        },
        {
            name: 'GitHub',
            url: 'https://github.com/developer-khadim',
            icon: <Github className="w-5 h-5" />,
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/khadim-ali12',
            icon: <Linkedin className="w-5 h-5" />,
        },
        {
            name: 'Portfolio',
            url: 'https://khadimali-devx1.vercel.app/',
            icon: <Globe className="w-5 h-5" />,
        },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-white/70 backdrop-blur-md shadow-sm transition-all duration-300">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                {/* Logo Section */}
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
                    <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
                        C
                    </div>
                    <span className="self-center text-2xl font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        CURD App
                    </span>
                </a>

                {/* Mobile Menu Button */}
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        type="button"
                        className="text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer hidden md:block"
                    >
                        Get Started
                    </button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
                        aria-controls="navbar-sticky"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Social Media Links (Replaces Pages) */}
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50/50 md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent justify-center items-center">
                        {socialLinks.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:text-white hover:bg-gradient-to-tr hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
                                    aria-label={item.name}
                                >
                                    {item.icon}
                                </a>
                            </li>
                        ))}
                        {/* Mobile Only Button */}
                        <li className="md:hidden mt-3 w-full">
                            <button
                                type="button"
                                className="w-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-md"
                            >
                                Get Started
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;