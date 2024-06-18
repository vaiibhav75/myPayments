import { useRecoilValue } from "recoil";
import { currentUser } from "../atoms/currentUser";
import { paymentReceiver } from "../atoms/paymentReceiver";

// Custom hook to check login status
export const useCheckLoginStatus = () => {
    const user = useRecoilValue(currentUser);
    return user.token !== null && user.token !== undefined && user.token !== "";
};

// Custom hook to check payment status
export const useCheckPaymentStatus = () => {
    const receiver = useRecoilValue(paymentReceiver);
    return receiver !== null && receiver !== undefined && receiver !== {};
};
