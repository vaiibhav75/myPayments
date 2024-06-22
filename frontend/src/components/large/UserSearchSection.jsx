import SearchButton from "../small/SearchButton.jsx";
import LoadingPage from "./LoadingPage.jsx";
import Lottie from "lottie-react";
import loading from "../../assets/animations/loadingAmiation.json";

function UserSearchSection({clickSend}) {
    return (
        <div className={"max-w-7xl mx-auto px-8 mb-6"}>
            <div>
                <h1 className="text-4xl font-bold ps-1 mb-2 text-black text-center sm:text-left">Find Users</h1>
            </div>
            <div className={"flex gap-2"}>
                <input
                    type={"text"}
                    placeholder={"Search for users"}
                    className="w-full placeholder:text-darkGray text-black bg-white font-medium rounded-lg text-m px-3 py-1.5 border-2 border-gray-200 focus:outline-none"
                />
                <SearchButton></SearchButton>


            </div>
            <LoadingPage></LoadingPage>

        </div>
    );
}

export default UserSearchSection;