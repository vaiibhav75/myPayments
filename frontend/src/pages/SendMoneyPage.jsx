import CrossIcon from "../components/icons/CrossIcon.jsx";

import {paymentReceiver} from "../atoms/paymentReceiver.js";
import {useRecoilValue} from "recoil";

function SendMoneyPage () {

    const receiver = useRecoilValue(paymentReceiver);


    return (
        <div>
            <CrossIcon></CrossIcon>
            <h1>Send Money Page</h1>
            <h2>Receiver: {receiver.firstName} {receiver.lastName}</h2>
        </div>

    )
}

export default SendMoneyPage