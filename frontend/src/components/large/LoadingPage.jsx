import Lottie from "lottie-react";
import loading from "../../assets/animations/loadingAmiation.json";

function LoadingPage() {
    return (
        <div className={"flex justify-center items-center h-screen bg-lightGray"}>
            <Lottie animationData={loading} style={{ width: 350, height: 350 }}/>
        </div>
    )
}

export default LoadingPage