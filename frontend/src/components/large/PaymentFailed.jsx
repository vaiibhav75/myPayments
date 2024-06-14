import Lottie from "lottie-react";
import failed from "../../assets/animations/paymentFailed.json";
import Cross from "../../assets/icons/CrossIcon.jsx";
import {useEffect} from "react";

function PaymentFailed() {
    return (
        <div className={"flex justify-center items-center h-screen bg-lightGray"}>

            <Cross/>
            <Lottie animationData={failed} loop={false} style={{ width: 500, height: 500 }}/>
        </div>
    )
}

export default PaymentFailed