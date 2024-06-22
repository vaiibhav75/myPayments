import LandingIllustration from "../../assets/illustrations/LandingPage.svg";
import BlackButton from "../small/BlackButton.jsx";
import WhiteButton from "../small/WhiteButton.jsx";

function IntroSection ({onLoginClick, onSignupClick}) {
    return (
        <div id = "home" className="flex flex-col md:flex-row max-w-7xl gap-4 md:gap-0 px-8 mx-auto py-12 justify-between">
            <div className={"w-full md:w-2/5 flex justify-center"}>
                <img
                    src={LandingIllustration}
                    alt="Landing Illustration"
                />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-8 justify-center text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Welcome to MyPayments</h1>
                <p className="text-xl md:text-2xl">
                    Your search for a secure payment wallet ends here. MyPayments is a one-stop solution for all your payment needs. Sign up now to get started.
                </p>

                <div className={"flex flex-col md:flex-row w-full md:w-96 gap-4"}>
                    <BlackButton label={"Log In"} onClick={onLoginClick}></BlackButton>
                    <WhiteButton label={"Sign Up"} onClick={onSignupClick}></WhiteButton>
                </div>
            </div>
        </div>
    );
}

export default IntroSection;