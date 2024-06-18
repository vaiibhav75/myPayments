
import './App.css'
import {useNavigate,BrowserRouter, Route, Routes} from "react-router-dom";

import DashboardPage from "./pages/DashboardPage.jsx";
import SendMoneyPage from "./pages/SendMoneyPage.jsx";
import SignInPage from "./pages/SingInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import MainPage from "./pages/MainPage.jsx";
import {RecoilRoot} from "recoil";

function App() {

  return (
      <RecoilRoot>
          <BrowserRouter>

              <Routes>
                  <Route path="/" element={<MainPage />}></Route>
                  <Route path="/signup" element={<SignUpPage />}></Route>
                  <Route path="/signin" element={<SignInPage />}></Route>
                  <Route path="/send" element={<SendMoneyPage />}></Route>
                  <Route path="/dashboard" element={<DashboardPage />}></Route>
              </Routes>
          </BrowserRouter>
      </RecoilRoot>

  )
}


export default App
