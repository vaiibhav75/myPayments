import Lottie from "lottie-react";
import failed from "../../assets/animations/paymentFailed.json";
import CrossIcon from "../icons/CrossIcon.jsx";


function PaymentFailed() {
    return (
        <div className={"flex justify-center items-center h-screen bg-lightGray"}>
            <CrossIcon/>
            <Lottie animationData={failed} loop={false} style={{ width: 500, height: 500 }}/>
        </div>
    )
}

export default PaymentFailed
