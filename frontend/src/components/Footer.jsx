import React from 'react';
import { Github, Linkedin, Globe, Menu, X, Mail } from 'lucide-react';


const Footer = () => {


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
        <footer className="bg-white border-t border-gray-100 mt-auto">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 text-white font-bold text-lg shadow-md">
                                C
                            </div>
                            <span className="self-center text-2xl font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                                CURD App
                            </span>
                        </a>
                        <p className="mt-4 text-gray-500 max-w-xs text-sm">
                            Building modern web experiences with passion and precision.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:text-blue-600 transition-colors">Documentation</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-600 transition-colors">Tutorials</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:text-blue-600 transition-colors">Github</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-600 transition-colors">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-600 transition-colors">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-100 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © {new Date().getFullYear()} <a href="/" className="hover:underline">CURD App™</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
                        {/* Social Icons */}
                      {socialLinks.map((link) => (
                        <a href={link.url} key={link.name} className="text-gray-400 hover:text-gray-900 transition-colors">
                            {link.icon}
                        </a>
                      ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
