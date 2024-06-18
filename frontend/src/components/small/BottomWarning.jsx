import { Link } from "react-router-dom"

export default function BottomWarning({label, buttonText, onClick}) {
    return <div className="text-base flex justify-center font-medium">
        <div>
            {label}
        </div>
        <div className="pointer underline pl-1 cursor-pointer" onClick={onClick}>
            {buttonText}
        </div>
    </div>
}