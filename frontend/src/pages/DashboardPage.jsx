import BlackButton from "../components/small/BlackButton.jsx";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {currentUser} from "../atoms/currentUser.js";
import {useNavigate} from "react-router-dom";
import ProfileSection from "../components/large/ProfileSection.jsx";
import UserSearchSection from "../components/large/UserSearchSection.jsx";

function DashboardPage() {

    const user = useRecoilValue(currentUser);

    const setUser = useSetRecoilState(currentUser);
    const navigate = useNavigate();
    return (
        <div className={"bg-lightGray h-screen"}>
            <ProfileSection firstName="Vaibhav" balance={95186} clickLogout={() => {
                setUser({})
                navigate("/")
            }}></ProfileSection>
           <UserSearchSection></UserSearchSection>
        </div>
    )
}

export default DashboardPage