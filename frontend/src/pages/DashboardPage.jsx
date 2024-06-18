import BlackButton from "../components/small/BlackButton.jsx";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {currentUser} from "../atoms/currentUser.js";
import {useNavigate} from "react-router-dom";

function DashboardPage() {

    const user = useRecoilValue(currentUser);

    const setUser = useSetRecoilState(currentUser);
    const navigate = useNavigate();
    return (
        <>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard</p>

            <div>
                <h2>Recent Transactions</h2>
                <ul>
                    <li>Transaction 1</li>
                    <li>Transaction 2</li>
                    <li>Transaction 3</li>
                </ul>
            </div>
            <div>
                {user.username && <p>Logged in as {user.username}</p>}
                {user.token && <p>Token: {user.token}</p>}
            </div>
            <BlackButton label={"Sign Out"} onClick={() => {
                setUser({})
                navigate("/")
            }}></BlackButton>
        </>
    )
}

export default DashboardPage