import CrossIcon from "../components/icons/CrossIcon.jsx";
import LoadingPage from "../components/large/LoadingPage.jsx";
import ErrorMessage from "../components/small/ErrorMessage.jsx";
import InputArea from "../components/small/InputArea.jsx";
import SubHeading from "../components/small/SubHeading.jsx";
import Heading from "../components/small/Heading.jsx";
import UpdateSuccessful from "../components/large/UpdateSuccessful.jsx";
import BlackButton from "../components/small/BlackButton.jsx";

import {currentUser} from "../atoms/currentUser.js";
import {useRecoilState} from "recoil";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

import {useCheckLoginStatus} from "../utils/checkStatus.jsx";
import {update} from "../api/update.js";

function UpdatePage() {

    // hooks
    const navigate = useNavigate();
    const loginStatus = useCheckLoginStatus();

    // Page state
    const [loading, setLoading] = useState(true);
    const [errorState, setErrorState] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successful, setSuccessful] = useState(false);

    // User data
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");

    // User state
    const [user, setUser] = useRecoilState(currentUser);

    useEffect(() => {
        if (!loginStatus) {
            navigate("/")
        } else {
            setLoading(false);
        }
    }, []);

    async function onClick() {
        try {
            setLoading(true);

            if (!firstName && !lastName && !password) {
                setErrorState(true);
                setErrorMessage("Please fill in at least one field.");
                return;
            }

            const response = await update(user.token, firstName, lastName, password);
            const data = await response.json();
            if (response.status === 200) {
                setSuccessful(true);
                setUser((prevUser) => ({
                    ...prevUser,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    token: data.token || prevUser.token // Ensure token is maintained or updated
                }));
            } else {
                setErrorState(true);
                setErrorMessage(data.message);
            }
        } catch (e) {
            setErrorState(true);
            setErrorMessage("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }


    }

    if (loading) {
        return <LoadingPage/>;
    }

    if (successful) {
        return <UpdateSuccessful></UpdateSuccessful>
    }

    return (
        <div className={"h-screen flex justify-center items-center bg-gray-200"}>
            <CrossIcon/>
            <div className={"flex flex-col gap-3 w-96 bg-white p-6 pt-8  shadow-md rounded-xl"}>
                <Heading text={"Update details"}></Heading>
                <SubHeading text={"Enter the information that you want to update"}></SubHeading>
                <InputArea
                    title={"First Name"}
                    placeholder={"John"}
                    type={"text"}
                    value={firstName}
                    setInput={setFirstName}>
                </InputArea>
                <InputArea
                    title={"Last Name"}
                    placeholder={"Doe"}
                    type={"text"}
                    value={lastName}
                    setInput={setLastName}>
                </InputArea>
                <InputArea
                    title={"Password"}
                    placeholder={"******"}
                    type={"password"}
                    value={password}
                    setInput={setPassword}>
                </InputArea>

                <ErrorMessage errorState={errorState} text={errorMessage}></ErrorMessage>
                <BlackButton label={"Update Details"} onClick={onClick}></BlackButton>
            </div>
        </div>
    )
}

export default UpdatePage