import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ActivateAccPage from "../pages/ActivateAccPage";
<<<<<<< HEAD
import VideosListPage from "../pages/VideosListPage";
=======
import ChangePasswordPage from "../pages/ChangePasswordPage";
import ChangePassByEmailPage from "../pages/ChangePassByEmailPage";
>>>>>>> 9967faf99ea96ce1c0e4f468ffc885fc5f3ce44f

const MainRouting = () => {
    return (
        <Routes>
            <Route path="/" element={<VideosListPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/activate-acc" element={<ActivateAccPage />} />
            <Route path="/change-password" element={<ChangePasswordPage />} />
            <Route
                path="/change-password-by-email"
                element={<ChangePassByEmailPage />}
            />
        </Routes>
    );
};

export default MainRouting;
