import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ActivateAccPage from "../pages/ActivateAccPage";
import VideosListPage from "../pages/VideosListPage";
import ChangePasswordPage from "../pages/ChangePasswordPage";
import ChangePassByEmailPage from "../pages/ChangePassByEmailPage";
import VideoCreatePage from "../pages/VideoCreatePage";

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
            <Route path="/video-create" element={<VideoCreatePage />} />
        </Routes>
    );
};

export default MainRouting;
