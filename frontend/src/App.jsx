
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import DashboardPage from "./pages/DashboardPage.jsx";
import SendMoneyPage from "./pages/SendMoneyPage.jsx";
import SignInPage from "./pages/SingInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<SignUpPage />}></Route>
            <Route path="/signin" element={<SignInPage />}></Route>
            <Route path="/send" element={<SendMoneyPage />}></Route>
            <Route path="/dashboard" element={<DashboardPage />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
