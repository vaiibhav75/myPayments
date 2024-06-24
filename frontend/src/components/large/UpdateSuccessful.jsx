import Lottie from "lottie-react";
import success from "../../assets/animations/updateSuccessful.json";
import CrossIcon from "../icons/CrossIcon.jsx";


function UpdateSuccessful() {
    return (
        <div className={"flex justify-center items-center h-screen bg-lightGray"}>
            <CrossIcon/>
            <Lottie animationData={success} loop={false} style={{ width: 500, height: 500 }}/>
        </div>
    )
}

export default UpdateSuccessful