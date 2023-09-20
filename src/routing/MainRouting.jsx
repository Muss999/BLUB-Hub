import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ActivateAccPage from "../pages/ActivateAccPage";
import VideosListPage from "../pages/VideosListPage";

const MainRouting = () => {
    return (
        <Routes>
            <Route path="/" element={<VideosListPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/activate-acc" element={<ActivateAccPage />} />
        </Routes>
    );
};

export default MainRouting;
