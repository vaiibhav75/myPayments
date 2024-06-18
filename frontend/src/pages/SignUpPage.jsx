// Components
import Heading from "../components/small/Heading.jsx";
import SubHeading from "../components/small/SubHeading.jsx";
import InputArea from "../components/small/InputArea.jsx";
import ErrorMessage from "../components/small/ErrorMessage.jsx";
import BottomWarning from "../components/small/BottomWarning.jsx";
import BlackButton from "../components/small/BlackButton.jsx";
import LoadingPage from "../components/large/LoadingPage.jsx";

// Hooks
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useSetRecoilState} from "recoil";

// Utils
import {signup} from "../api/signup.js";
import {useCheckLoginStatus} from "../utils/checkStatus.jsx";
import {currentUser} from "../atoms/currentUser.js";


function SignUpPage() {

    // hooks
    const navigate = useNavigate();
    const loginStatus = useCheckLoginStatus();

    // Page state
    const [loading, setLoading] = useState(true);
    const [errorState, setErrorState] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Invalid login credentials.");

    // User data
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // User state
    const setUser = useSetRecoilState(currentUser);

    // Check if user is already logged in
    useEffect(() => {
        if (loginStatus) {
            navigate("/dashboard")
        } else {
            setLoading(false);
        }
    }, []);


    // Function to handle signup
    async function onClick() {
        try {
            setLoading(true);

            if (!firstName || !lastName || !username || !password) {
                setErrorState(true);
                setErrorMessage("Please fill in all fields.");
                return;
            }

            const response = await signup(firstName, lastName, username, password);

            if (response.status === 200) {
                const data = await response.json();
                setUser({
                    token: data.token,
                    username: data.username,
                    firstName: data.firstName,
                    lastName: data.lastName
                });
                navigate("/dashboard");
            } else {
                setErrorState(true);
                const data = await response.json();
                setErrorMessage(data.message);
            }
        } catch (error) {
            setErrorState(true);
            setErrorMessage("An error occurred during signup.");
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <LoadingPage/>;
    }

    return (
        <div className={"h-screen flex justify-center items-center bg-gray-200"}>
            <div className={"flex flex-col gap-3 w-96 bg-white p-6 pt-8  shadow-md rounded-xl"}>
                <Heading text={"Sign Up"}></Heading>
                <SubHeading text={"Enter your information to create an account"}></SubHeading>
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
                    title={"Email"}
                    placeholder={"vaibhav@gmail.com"}
                    type={"email"}
                    value={username}
                    setInput={setUsername}>
                </InputArea>
                <InputArea
                    title={"Password"}
                    placeholder = {"123456"}
                    type={"password"}
                    value={password}
                    setInput={setPassword}>
                </InputArea>
                <ErrorMessage errorState={errorState} text={errorMessage}></ErrorMessage>
                <BlackButton label={"Sign Up"} onClick={onClick}></BlackButton>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"}
                               onClick={() => navigate("/signin")}></BottomWarning>
            </div>
        </div>
    )


}

export default SignUpPage