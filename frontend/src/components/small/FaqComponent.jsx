import React, { useState } from 'react';
import UpArrow from "../icons/UpArrow.jsx";
import DownArrow from "../icons/DownArrow.jsx";

const faqs = [
    {
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces."
    },
    {
        question: "What is Tailwind CSS?",
        answer: "Tailwind CSS is a utility-first CSS framework for rapid UI development."
    },
    {
        question: "How do I use React with Tailwind?",
        answer: "You can use Tailwind's utility classes directly in your React components to style them."
    }
];

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





export default FaqComponent;
