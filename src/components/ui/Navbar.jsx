import React, { useEffect, useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { logout, updateToken } from "../../helpers/functions";
import { isUserLogin } from "../../helpers/functions";
import { IoIosSearch } from "react-icons/io";
import { changeSearchVal } from "../../store/video/videoSlice";
import { getVideos } from "../../store/video/videoAction";
import { useDispatch } from "react-redux";

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
    return (
        <div className="navbar__block">
            <button onClick={() => navigate("/")}>Home</button>

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

            {isUserLogin() ? (
                <div>
                    <div>
                        <button onClick={() => navigate("/video-create")}>
                            AddVideo
                        </button>
                    </div>
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
                </div>
            ) : (
                <>
                    <button onClick={() => navigate("/register")}>
                        Register
                    </button>
                    <button onClick={() => navigate("/login")}>Login</button>
                </>
            )}
        </div>
    );
};

export default Navbar;
