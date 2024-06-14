import {useNavigate} from "react-router-dom";

export function toDashboard() {
    const navigate = useNavigate();
    navigate("/dashboard");
}

export function toHome() {
    const navigate = useNavigate();
    navigate("/");
}

function toSignIn() {
    const navigate = useNavigate();
    navigate("/login");
}

function toSignUp() {
    const navigate = useNavigate();
    navigate("/signup");
}

function toSend() {
    const navigate = useNavigate();
    navigate("/send");
}

export default {toDashboard, toHome, toSignIn, toSignUp, toSend};