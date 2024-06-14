import {currentUser} from "../atoms/currentUser.js";
import {useRecoilValue} from "recoil";
import {paymentReceiver} from "../atoms/paymentReceiver.js";

function checkLoginStatus() {
    const user = useRecoilValue(currentUser);
    return user.token !== null && user.token !== undefined && user.token !== "";
}

function checkPaymentStatus() {
    const receiver = useRecoilValue(paymentReceiver);
    return receiver !== null && receiver !== undefined && receiver !== {};
}


export default {checkLoginStatus, checkPaymentStatus}