
import './App.css'
import {useNavigate,BrowserRouter, Route, Routes} from "react-router-dom";

import DashboardPage from "./pages/DashboardPage.jsx";
import SendMoneyPage from "./pages/SendMoneyPage.jsx";
import SignInPage from "./pages/SingInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";

import Loading from "./components/Loading.jsx";
import {useEffect, useState} from "react";

import checkLogin from "./functions/checkLogin.jsx";

function App() {

  return (
    <BrowserRouter>

        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/signup" element={<SignUpPage />}></Route>
            <Route path="/signin" element={<SignInPage />}></Route>
            <Route path="/send" element={<SendMoneyPage />}></Route>
            <Route path="/dashboard" element={<DashboardPage />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

function Main() {
    const[loading, setLoading] = useState(true);
    checkLogin(setLoading);

    return (
        <>
            {loading ? <Loading /> : <>Hello</>}
        </>
    )

}



export default App
