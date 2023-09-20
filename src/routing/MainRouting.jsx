import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ActivateAccPage from "../pages/ActivateAccPage";
import ChangePasswordPage from "../pages/ChangePasswordPage";
import ChangePassByEmailPage from "../pages/ChangePassByEmailPage";
import EmailChangePassActivatePage from "../pages/EmailChangePassActivatePage";

const MainRouting = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/activate-acc" element={<ActivateAccPage />} />
            <Route path="/change-password" element={<ChangePasswordPage />} />
            <Route
                path="/change-password-by-email"
                element={<ChangePassByEmailPage />}
            />
            <Route
                path="/change-pass-get-code"
                element={<EmailChangePassActivatePage />}
            />
        </Routes>
    );
};

export default MainRouting;
