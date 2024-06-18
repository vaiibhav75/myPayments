import AboutUsIllustration from "../../assets/illustrations/AboutUsPage.svg";

function AboutUsSection () {
    return (
        <div id ="aboutus" className="flex gap-0 pe-36 ps-20 py-8 text-black">
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

export default AboutUsSection;
