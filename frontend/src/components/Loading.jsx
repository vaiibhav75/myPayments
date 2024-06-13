import Lottie from "lottie-react";
import loading from "../assets/loadingAmiation.json";

function Loading() {
    return (
        <div className={"flex justify-center items-center h-screen bg-lightGray"}>
            <Lottie animationData={loading} style={{ width: 300, height: 300 } }/>
        </div>
    )
}

export default Loading