import React, { useEffect } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { logout, updateToken } from "../../helpers/functions";
import { isUserLogin } from "../../helpers/functions";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
    const navigate = useNavigate();

    useEffect(() => {
        updateToken();
    }, []);
    return (
        <div className="navbar__block">
            <button onClick={() => navigate("/")}>Home</button>

            <div className="youtube-style-input">
                <input type="text" placeholder="Поиск" />
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
                        }}>
                        Change Password
                    </button>
                    <button
                        onClick={() => {
                            logout();
                            navigate("/");
                        }}>
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
