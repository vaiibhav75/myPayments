import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useRecoilState, useSetRecoilState} from "recoil";

import {currentUser} from "../atoms/currentUser.js";
import {paymentReceiver} from "../atoms/paymentReceiver.js";

import ProfileSection from "../components/large/ProfileSection.jsx";
import UserSearchSection from "../components/large/UserSearchSection.jsx";
import LoadingPage from "../components/large/LoadingPage.jsx";

import {useCheckLoginStatus} from "../utils/checkStatus.jsx";
import {checkBalance} from "../api/balance.js";

function DashboardPage() {

    // hooks
    const navigate = useNavigate();
    const loginStatus = useCheckLoginStatus();

    // Page state
    const [loading, setLoading] = useState(true);
    const [currentBalance, setBalance] = useState(0);

    // User
    const [user,setUser] = useRecoilState(currentUser);
    const setReceiver = useSetRecoilState(paymentReceiver);

    // Check userStatus
    useEffect(() => {
        async function run() {
            if (!loginStatus) {
                navigate("/")
            }
            const balance = await checkBalance(user.token);
            setBalance(balance);
            setLoading(false);
        }
        run();
    }, []);


    if (loading) return <LoadingPage></LoadingPage>

    return (
        <div className={"bg-lightGray min-h-screen"}>
            <ProfileSection
                firstName={user.firstName}
                balance={currentBalance}

                clickLogout={() => {
                    setLoading(true);
                    setUser({});
                    navigate("/");
                }}

                clickEdit={() => {
                    setLoading(true);
                    navigate("/update");
                }}>


            </ProfileSection>
           <UserSearchSection
               cuurentUser={user.username}

               clickSend={(id,firsName,lastName) =>{
                   setLoading(true);
                   setReceiver({id:id,firstName:firsName,lastName:lastName});
                   navigate("/send");
               }}>
           </UserSearchSection>
        </div>
    )
}

export default DashboardPage