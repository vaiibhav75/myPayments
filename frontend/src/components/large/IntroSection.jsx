import LandingIllustration from "../../assets/illustrations/LandingPage.svg";
import BlackButton from "../small/BlackButton.jsx";
import WhiteButton from "../small/WhiteButton.jsx";

function IntroSection ({onLoginClick, onSignupClick}) {
    return (
        <div id = "home" className="flex gap-0 pe-36 ps-20 py-8 text-black">
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
                    <BlackButton label={"Log In"} onClick={onLoginClick}></BlackButton>
                    <WhiteButton label={"Sign Up"} onClick={onSignupClick}></WhiteButton>
                </div>
            </div>
        </div>
    );
}

export default IntroSection;