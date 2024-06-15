import AboutUsIllustration from "../assets/illustrations/AboutUsPage.svg";
import LandingIllustration from "../assets/illustrations/LandingPage.svg";
import FAQsection from "../components/large/FAQsection.jsx";
import MainLogo from "../components/icons/MainLogo.jsx";
import BlackButton from "../components/small/BlackButton.jsx";
import WhiteButton from "../components/small/WhiteButton.jsx";

function MainPage() {
    return (
        <div>
            <Topbar></Topbar>
            <LandingPage></LandingPage>
            <AboutUs></AboutUs>
            <FAQsection></FAQsection>
            <Footer></Footer>
        </div>

    );
}



const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold">Made by Vaibhav</h2>
                        <p className="mt-1"><a href="https://storyset.com/business">Business illustrations by Storyset</a></p>
                    </div>
                    <div>
                        <ul className="flex space-x-6">
                            <li>
                                <a href="#" className="hover:text-gray-400">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400">Privacy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const Topbar = () => {
    return (
        <header className="bg-gray-800 text-white py-5 mb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <MainLogo></MainLogo>
                        <h1 className="text-3xl font-bold">MyPayments</h1>

                    </div>
                    <div>
                        <nav>
                            <ul className="flex space-x-4">
                                <li>
                                    <a href="#" className="hover:text-gray-400">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-400">About</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-400">Services</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-400">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

const LandingPage = () => {
    return (
        <div className="flex gap-0 pe-36 ps-20 py-8 text-black">
                <div className="w-2/5 flex justify-center">
                    <img
                        src={LandingIllustration}
                        alt="Placeholder"
                        className="w-full"
                    />
                </div>
                <div className="w-3/5 flex flex-col gap-4 ps-32 justify-center">
                    <h1 className="text-6xl font-bold">Welcome to MyPayments</h1>
                    <p className="text-2xl mt-6 mb-4 w-full whitespace-normal">
                        Your search for a secure payment wallet ends here. MyPayments is a one-stop solution for all your payment needs. Sign up now to get started.
                    </p>

                    <div className={"flex w-96 gap-4"}>
                        <BlackButton label={"Log In"}></BlackButton>
                        <WhiteButton label={"Sign Up"}></WhiteButton>
                    </div>
                </div>
        </div>
    );
};

const AboutUs = () => {
    return (
        <div className="flex gap-0 pe-36 ps-20 py-8 text-black">
                <div className="w-3/5 flex flex-col justify-center pe-24 ps-16">
                    <h1 className="text-5xl font-bold mb-6">About MyPayments</h1>
                    <p className="text-lg lg:text-2xl mb-4">
                        MyPayments simplifies financial management with robust features for secure transactions, comprehensive account management,
                        and user-friendly navigation, making it an essential tool for modern financial needs.
                    </p>
                    <p className="text-2xl mb-4">
                        With MyPayments,you can securely manage your funds, make payments, and transfer money effortlessly.
                    </p>

                </div>
                <div className="w-2/5">
                    <img
                        src={AboutUsIllustration}
                        alt="About Us Image"
                        className="w-full"
                    />
                </div>
        </div>
    );
};

export default MainPage;
