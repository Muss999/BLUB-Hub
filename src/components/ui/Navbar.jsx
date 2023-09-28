import React, { useEffect, useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { logout, updateToken } from "../../helpers/functions";
import { isUserLogin } from "../../helpers/functions";
import { IoIosSearch } from "react-icons/io";
import { changeSearchVal } from "../../store/video/videoSlice";
import { getVideos } from "../../store/video/videoAction";
import { useDispatch } from "react-redux";
import create_icon from "./img/3239658-removebg-preview.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faSearch,
    faBell,
    faUser,
    faCamera,
} from "@fortawesome/free-solid-svg-icons"; // Импортируйте нужные иконки

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    useEffect(() => {
        updateToken();
    }, []);

    useEffect(() => {
        dispatch(changeSearchVal({ search }));
        dispatch(getVideos());
    }, [search]);

    useEffect(() => {
        updateToken();
    }, []);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const user = localStorage.getItem("account");
    console.log(user);
    return (
        <div className="navbar__block">
            {/* <img
                src={home}
                alt=""
                onClick={() => navigate("/")}
                style={{
                    width: "2%",
                }}
            /> */}
            <div>
                <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                    <div className="sidebar-header">
                        <button className="menu-button" onClick={toggleSidebar}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                        <a href="#" className="logo-link">
                            <FontAwesomeIcon className="logo" />
                        </a>
                    </div>
                    <div className="sidebar-menu">
                        <ul>
                            <li>
                                <button
                                    onClick={() => navigate("/")}
                                    style={{
                                        marginBottom: "10px",
                                        marginTop: "10px",
                                    }}
                                >
                                    Home
                                </button>
                            </li>

                            {isUserLogin() ? (
                                <div className="sidebar__block">
                                    <button
                                        onClick={() => {
                                            navigate("/change-password");
                                        }}
                                    >
                                        Change Password
                                    </button>
                                    <button
                                        onClick={() => {
                                            logout();
                                            navigate("/");
                                        }}
                                    >
                                        Logout
                                    </button>
                                    <button
                                        onClick={() => navigate("/watch-later")}
                                    >
                                        Watch Later
                                    </button>

                                    <div className="sidebar-footer">
                                        <button
                                            className="upload-button"
                                            onClick={() =>
                                                navigate("/video-create")
                                            }
                                        >
                                            Загрузить видео
                                        </button>
                                        <a href="http://172.20.10.3:8000/">
                                            Chat
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <div className="sidebar__block">
                                    <button
                                        onClick={() => navigate("/register")}
                                    >
                                        Register
                                    </button>
                                    <button onClick={() => navigate("/login")}>
                                        Login
                                    </button>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>

                <div className="navbar">
                    <div className="navbar-left">
                        <button className="menu-button" onClick={toggleSidebar}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                        <a href="#" className="logo-link">
                            <FontAwesomeIcon className="logo" />
                        </a>
                    </div>
                    <div className="youtube-style-input">
                        <input
                            type="text"
                            placeholder="Поиск"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button type="submit">
                            <IoIosSearch size={20} />
                        </button>
                    </div>

                    <div className="right__navbar__block">
                        {isUserLogin() && (
                            <>
                                <div
                                    className="right__navbar__block__img"
                                    onClick={() => navigate("/video-create")}
                                >
                                    <img src={create_icon} alt="" />
                                </div>
                                <p>{user}</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
