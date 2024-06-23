import {useState} from "react";
import MainLogo from "../icons/MainLogo.jsx";

const TopBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-gray-800 text-white py-5 mb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <MainLogo />
                        <h1 className="text-3xl font-bold hover:cursor-pointer">MyPayments</h1>
                    </div>

                    {/* Toggle Button for Mobile */}
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-gray-400 hover:text-white focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex">
                        <ul className="flex space-x-6">
                            <li>
                                <a href="#home" className="hover:text-gray-400">Home</a>
                            </li>
                            <li>
                                <a href="#aboutus" className="hover:text-gray-400">About</a>
                            </li>
                            <li>
                                <a href="#faqs" className="hover:text-gray-400">FAQs</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pt-3" id="mobile-menu">
                        <ul className="flex flex-col mt-2 space-y-4">
                            <li>
                                <a href="#home" className="hover:text-gray-400">Home</a>
                            </li>
                            <li>
                                <a href="#aboutus" className="hover:text-gray-400">About</a>
                            </li>
                            <li>
                                <a href="#faqs" className="hover:text-gray-400">FAQs</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default TopBar;