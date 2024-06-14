import {paymentReceiver} from "../atoms/paymentReceiver.js";
import {paymentAmount} from "../atoms/paymentAmount.js";
import {useSetRecoilState} from "recoil";

function resetPaymentInfo() {
    const setPaymentAmount = useSetRecoilState(paymentAmount);
    const setPaymentReceiver = useSetRecoilState(paymentReceiver);
    setPaymentAmount(0);
    setPaymentReceiver({});
}

export default {resetPaymentInfo}