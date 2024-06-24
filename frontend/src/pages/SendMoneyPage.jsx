import CrossIcon from "../components/icons/CrossIcon.jsx";

import {paymentReceiver} from "../atoms/paymentReceiver.js";
import {useRecoilValue} from "recoil";
import {useNavigate} from "react-router-dom";
import {useCheckLoginStatus, useCheckPaymentStatus} from "../utils/checkStatus.jsx";
import {useEffect, useState} from "react";
import {currentUser} from "../atoms/currentUser.js";
import {payment} from "../api/payment.js";
import LoadingPage from "../components/large/LoadingPage.jsx";
import PaymentSuccessful from "../components/large/PaymentSuccessful.jsx";
import BlackButton from "../components/small/BlackButton.jsx";
import ErrorMessage from "../components/small/ErrorMessage.jsx";
import GreenButton from "../components/small/GreenButton.jsx";
import InputArea from "../components/small/InputArea.jsx";
import SubHeading from "../components/small/SubHeading.jsx";
import Heading from "../components/small/Heading.jsx";

function SendMoneyPage () {

    // hooks
    const navigate = useNavigate();
    const loginStatus = useCheckLoginStatus();
    const receiverStatus = useCheckPaymentStatus();

    // Page state
    const [loading, setLoading] = useState(true);
    const [errorState, setErrorState] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successful, setSuccessful] = useState(false);

    // Values
    const user = useRecoilValue(currentUser);
    const receiver = useRecoilValue(paymentReceiver);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        if (!loginStatus) navigate("/");
        if (!receiverStatus) navigate("/dashboard");

        setLoading(false);
    },[])

    async function sendMoney() {
        try {
            setLoading(true);

            if (isNaN(amount) || amount <= 0) {
                setErrorState(true);
                setErrorMessage("Please enter a valid amount.");
                return;
            }

            const response = await payment(user.token, amount, receiver.id);
            const data = await response.json();

            if (response.status === 200) {
                setSuccessful(true);
            } else {
                setErrorState(true);
                setErrorMessage(data.message);
            }
        } catch (e) {
            setErrorState(true);
            setErrorMessage("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <LoadingPage/>;
    }

    if (successful) {
        return <PaymentSuccessful></PaymentSuccessful>
    }

    return (
        <div className={"h-screen flex justify-center items-center bg-gray-200"}>
            <CrossIcon></CrossIcon>
            <div className={"flex flex-col gap-3 w-96 bg-white p-6 pt-8  shadow-md rounded-xl"}>
                <Heading text={"Send money"}></Heading>
                <SubHeading text={"Please do not refresh or close this tab for successful payment"}></SubHeading>
                <div className={"flex items-center gap-3 my-1"}>
                    <div className="rounded-full w-11 h-11 bg-green text-white p-2 pt-2.5 flex items-center justify-center">
                        <p className="text-2xl font-bold text-center">{receiver.firstName[0]}</p>
                    </div>
                    <h1 className={"text-3xl font-bold"}>{receiver.firstName} {receiver.lastName}</h1>
                </div>
                <InputArea
                    title={"Amount (in Rs)"}
                    placeholder = {"Enter Amount"}
                    type={"text"}
                    value={amount === 0 ? null : amount}
                    setInput={setAmount}>
                </InputArea>
                <ErrorMessage errorState={errorState} text={errorMessage}></ErrorMessage>
                <GreenButton label={"Initiate Transfer"} onClick={sendMoney}></GreenButton>

            </div>
        </div>

    )
}

export default SendMoneyPage