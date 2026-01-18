import React from 'react';

const Footer = () => {
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
                        {/* Social Icons (Simplified for Footer) */}
                        <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                            <span className="sr-only">Facebook</span>
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 15.284a11.849 11.849 0 0 0 6.29 1.843c7.547 0 11.675-6.252 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 1.892Z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
