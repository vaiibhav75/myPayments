import MainLogo from "../icons/MainLogo.jsx";
import SettingsIcon from "../icons/SettingsIcon.jsx";
import LogOutIcon from "../icons/LogOutIcon.jsx";
import InputArea from "../small/InputArea.jsx";
import {useNavigate} from "react-router-dom";

function ProfileSection({firstName, balance, clickEdit, clickLogout}) {
    const navigate = useNavigate();
    return (
        <div>
            <header className="bg-gray-800 text-white py-5 mb-6">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <MainLogo></MainLogo>
                            <h1 className="text-3xl font-bold hover:cursor-pointer" onClick={() => {navigate("/")}}>MyPayments</h1>

                        </div>
                        <div>
                            <nav>
                                <ul className="flex space-x-5 items-center">
                                    <li className={"hidden sm:block"}>
                                        <p className={"text-xl font-medium"}>Hello, {firstName}</p>
                                    </li>
                                    <li>
                                        <SettingsIcon onClick={clickEdit}></SettingsIcon>
                                    </li>
                                    <li>
                                        <LogOutIcon onClick={clickLogout}></LogOutIcon>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            <div className={"max-w-7xl mx-auto px-8 mb-6"}>
                <div className={"w-full sm:w-96 bg-white rounded-lg shadow-md px-4 py-3"}>
                    <p className={"text-darkGray font-semibold"}>Current balance</p>
                    <h3 className={"font-semibold text-3xl text-black pt-3"}>{processAmount(balance)}</h3>
                </div>
            </div>



        </div>

    )

}

function processAmount(x) {
    return "₹" + new Intl.NumberFormat('en-IN').format(x) + ".00";
}


export default ProfileSection;