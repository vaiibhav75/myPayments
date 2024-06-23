import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import React, { Suspense, lazy } from 'react';

// Lazy load the components
const DashboardPage = lazy(() => import("./pages/DashboardPage.jsx"));
const SendMoneyPage = lazy(() => import("./pages/SendMoneyPage.jsx"));
const SignInPage = lazy(() => import("./pages/SignInPage.jsx"));
const SignUpPage = lazy(() => import("./pages/SignUpPage.jsx"));
const MainPage = lazy(() => import("./pages/MainPage.jsx"));
const UpdatePage = lazy(() => import("./pages/UpdatePage.jsx"));

import LoadingPage from "./components/large/LoadingPage.jsx";

function App() {
    return (
        <div>
            <RecoilRoot>
                <BrowserRouter>
                    <Suspense fallback={<LoadingPage></LoadingPage>}>
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/signup" element={<SignUpPage />} />
                            <Route path="/signin" element={<SignInPage />} />
                            <Route path="/send" element={<SendMoneyPage />} />
                            <Route path="/dashboard" element={<DashboardPage />} />
                            <Route path="/update" element={<UpdatePage />} />
                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </RecoilRoot>
        </div>
    );
}

export default App;
