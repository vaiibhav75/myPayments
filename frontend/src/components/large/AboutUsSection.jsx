import AboutUsIllustration from "../../assets/illustrations/AboutUsPage.svg";

function AboutUsSection () {
    return (
        <div id ="aboutus" className="flex flex-col md:flex-row max-w-7xl gap-4 md:gap-0 px-8 mx-auto py-12 justify-between">
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left order-2 md:order-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">About MyPayments</h1>
                <p className="text-xl md:text-2xl mb-4">
                    MyPayments simplifies financial management with robust features for secure transactions, comprehensive account management,
                    and user-friendly navigation, making it an essential tool for modern financial needs.
                </p>
                <p className="text-xl md:text-2xl mb-4">
                    With MyPayments,you can securely manage your funds, make payments, and transfer money effortlessly.
                </p>

            </div>
            <div className={"w-full md:w-2/5 flex justify-center order-1 md:order-2"}>
                <img
                    src={AboutUsIllustration}
                    alt="About Us Image"
                />
            </div>
        </div>
    );
};

export default AboutUsSection;
