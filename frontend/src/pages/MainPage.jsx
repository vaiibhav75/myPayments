import IntroSection from "../components/large/IntroSection.jsx";
import AboutUsSection from "../components/large/AboutUsSection.jsx";
import FaqSection from "../components/large/FaqSection.jsx";
import TopBar from "../components/large/TopBar.jsx";
import {useNavigate} from "react-router-dom";



function MainPage() {
    const navigate = useNavigate();

    return (
        <div>
            <TopBar></TopBar>
            <IntroSection
                onLoginClick={() => {
                    navigate("/signin");
                }}
                onSignupClick={() => {
                    navigate("/signup");
                }}>
            </IntroSection>
            <AboutUsSection></AboutUsSection>
            <FaqSection></FaqSection>
            <Footer></Footer>
        </div>

    );
}


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-6">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold">Made by Vaibhav</h2>
                        <p className="mt-1"><a href="https://storyset.com/business">Business illustrations by
                            Storyset</a></p>
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
                                <a href="https://wa.me/9811964198" target="_blank"
                                   className="hover:text-gray-400">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default MainPage;
