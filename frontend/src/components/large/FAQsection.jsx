import FaqComponent from "../small/FaqComponent.jsx";
import FaqIllustration from "../../assets/illustrations/FAQs.svg";
function FAQsection () {
    return (
        <div className={"flex gap-20 px-36 py-20"}>
            <div className={"w-2/5 flex justify-center"}>
                <img src={FaqIllustration} alt="FAQs" className="w-full"/>
            </div>
            <div className={"w-3/5 flex pt-4 justify-center ps-10"}>
                <FaqComponent></FaqComponent>
            </div>

        </div>

    );
}

export default FAQsection;