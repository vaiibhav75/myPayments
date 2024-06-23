import {useNavigate} from "react-router-dom";

function CrossIcon() {
    const navigate = useNavigate();
    return (
        <div className={"absolute right-4 top-4 text-darkGray hover:text-red hover:cursor-pointer"} onClick={() => navigate("/dashboard")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

        </div>
    )
}

export default CrossIcon