import React, { useEffect } from "react";
import styles from "./navbar.module.css";
import { useNavigate } from "react-router-dom";
import { logout, updateToken } from "../../helpers/functions";
import { isUserLogin } from "../../helpers/functions";

const Navbar = () => {
    const navigate = useNavigate();

    useEffect(() => {
        updateToken();
    }, []);
    return (
        <div>
            <button onClick={() => navigate("/")}>Home</button>
            {isUserLogin() ? (
                <>
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
                </>
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
