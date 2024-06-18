import FaqIllustration from "../../assets/illustrations/FAQs.svg";
import React, {useState} from "react";
import UpArrow from "../icons/UpArrow.jsx";
import DownArrow from "../icons/DownArrow.jsx";

const faqs = [
    {
        question: "What is MyPayments?",
        answer: "MyPayments is a web app that allows you to simulate various payment scenarios to understand how different factors affect your payments."
    },
    {
        question: "How are transactions secured in MyPayments?",
        answer: "Transactions in MyPayments are secured using industry-standard encryption protocols, ensuring that all data is transmitted safely."
    },
    {
        question: "How do I create a secure password?",
        answer: "To create a secure password, use a combination of upper and lower case letters, numbers, and special characters."
    },
    {
        question: "Is my personal information safe with MyPayments?",
        answer: "Yes, your personal information is protected using robust security measures, including encryption and secure data storage practices."
    },
    {
        question: "How do I update my account information in MyPayments?",
        answer: "To update your account information, log in to your account and click the edit icon on the dashboard"
    },

];

function FaqSection () {
    return (
        <div id = "faqs" className={"flex gap-20 px-36 py-20"}>
            <div className={"w-2/5 flex justify-center"}>
                <img src={FaqIllustration} alt="FAQs" className="w-full"/>
            </div>
            <div className={"w-3/5 flex pt-4 justify-center ps-10"}>
                <FaqComponent></FaqComponent>
            </div>

        </div>

    );
}

const FaqComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full mx-auto">
            <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
            {faqs.map((faq, index) => (
                <FAQ key = {index} index={index} question={faq.question} answer={faq.answer} activeIndex={activeIndex} handleToggle={handleToggle} />
            ))}
        </div>
    );
};


function FAQ ({index, question, answer, activeIndex, handleToggle}) {
    return (
        <div key={index} className="mb-4 ">
            <button
                className={"w-full text-left p-4 bg-gray-100 rounded-t-lg focus:outline-none " + (activeIndex === index ? "": "rounded-b-lg")}
                onClick={() => handleToggle(index)}
            >
                <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">{question}</span>
                    <span className="ml-2">
                {activeIndex === index ? (
                    <UpArrow />
                ) : (
                    <DownArrow />
                )}
              </span>
                </div>
            </button>
            {activeIndex === index && (
                <div className="p-4 bg-gray-50 rounded-b-lg border-t border-gray-200">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
}


export default FaqSection;