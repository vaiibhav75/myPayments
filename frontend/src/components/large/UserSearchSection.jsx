
import Lottie from "lottie-react";
import loading from "../../assets/animations/loadingAmiation.json";
import BlackButton from "../small/BlackButton.jsx";
import {useEffect, useState} from "react";
import {search} from "../../api/search.js";

function UserSearchSection({clickSend, cuurentUser}) {
    const [currentFilter, setCurrentFilter] = useState("");
    const [filter, setFilter] = useState("");
    const debouncedFilter = useDebounce(filter, 500);
    return (
        <div className={"max-w-7xl mx-auto px-8 pb-6"}>
            <div>
                <h1 className="text-4xl font-bold ps-1 mb-2 text-black text-center sm:text-left">Find Users</h1>
            </div>
            <div className={"flex gap-2 mb-4"}>
                <input
                    type={"text"}
                    value={filter}
                    placeholder={"Search for users"}
                    className="w-full placeholder:text-darkGray text-black bg-white font-medium rounded-lg text-m px-3 py-1.5 border-2 border-gray-200 focus:outline-none"
                    onChange={(e) => setFilter(e.target.value)}
                />


            </div>
            <UserSection filter={debouncedFilter} clickSend={clickSend} currentUser={cuurentUser}></UserSection>
        </div>
    );
}

function UserSection ({filter, clickSend, currentUser}) {
    const [isLoading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {

        async function run() {
            setLoading(true);
            const fetchUsers = await search(filter);
            fetchUsers.sort((a, b) => {
                return a.firstName.localeCompare(b.firstName);
            });
            setUsers(fetchUsers);
            setLoading(false);
        }
        run();
    },[filter]);

    if (isLoading) return (
        <div className={"flex justify-center items-center h-full bg-lightGray"}>
            <Lottie animationData={loading} style={{ width: 350, height: 350 }}/>
        </div>
    )

    return (
        <div className={"flex flex-col gap-3"}>
            {users.map((user) => {
                if (user.username === currentUser) return null;
                return <User firstName={user.firstName} lastName={user.lastName} key={user._id} id = {user._id} clickSend={clickSend}></User>
            })}
        </div>
    )
}

function User({firstName, lastName, id, clickSend}) {
    return (
        <div className={"flex justify-between items-center p-2 sm:p-3 bg-white rounded-lg shadow-md"}>
            <div className={"flex items-center gap-2 sm:gap-3"}>
                <div className="rounded-full w-9 sm:w-11 h-9 sm:h-11 bg-black text-white p-2 pt-2.5 flex items-center justify-center">
                    <p className="text-xl sm:text-2xl font-bold text-center">{firstName[0]}</p>
                </div>
                <h1 className={"text-xl sm:text-2xl font-semibold"}>{firstName} {lastName}</h1>
            </div>
            <div>
                <div className={"hidden sm:block"}>
                    <BlackButton onClick={() => clickSend(id,firstName,lastName)} label = "Send Money" ></BlackButton>
                </div>
                <div className={"block sm:hidden"}>
                    <BlackButton onClick={() => clickSend(id,firstName,lastName)} label = "Send" ></BlackButton>
                </div>

            </div>


        </div>
    )
}

function useDebounce (value, delay) {
    const [debouncedValue, setDebouncedValue] =useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timer);
    },[value,delay])

    return debouncedValue;
}

export default UserSearchSection;