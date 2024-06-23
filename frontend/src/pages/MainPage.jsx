import MainLogo from "../components/icons/MainLogo.jsx";
import IntroSection from "../components/large/IntroSection.jsx";
import AboutUsSection from "../components/large/AboutUsSection.jsx";
import FaqSection from "../components/large/FaqSection.jsx";
import {useState} from "react";
import LoadingPage from "../components/large/LoadingPage.jsx";
import {useNavigate} from "react-router-dom";


function MainPage() {
    const [loading, setLoading] = useState(false);


    const navigate = useNavigate();





    function handleLoginClick() {
        setLoading(true);
        navigate("/signin");
    }

    function handleSignupClick() {
        setLoading(true);
        navigate("/signup");
    }

    if (loading) return <LoadingPage setLoading={setLoading}></LoadingPage>

    return (
        <div>
            <TopBar></TopBar>
            <IntroSection onLoginClick={handleLoginClick} onSignupClick={handleSignupClick}></IntroSection>
            <AboutUsSection></AboutUsSection>
            <FaqSection></FaqSection>
            <Footer></Footer>
        </div>

    );
}


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



const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-6">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold">Made by Vaibhav</h2>
                        <p className="mt-1"><a href="https://storyset.com/business">Business illustrations by Storyset</a></p>
                    </div>
                    <div className={"hidden sm:block"}>
                        <ul className="flex space-x-6">
                            <li>
                                <a href="#home" className="hover:text-gray-400">Home</a>
                            </li>
                            <li>
                                <a href="#aboutus" className="hover:text-gray-400">About</a>
                            </li>
                            <li>
                                <a href="https://wa.me/9811964198" target="_blank" className="hover:text-gray-400">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default MainPage;
