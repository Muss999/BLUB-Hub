import React from "react";
import styles from "./navbar.module.css";
import { useNavigate } from "react-router-dom";
import { logout } from "../../helpers/functions";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/register")}>Register</button>
            <button onClick={() => navigate("/login")}>Login</button>
            <button
                onClick={() => {
                    logout();
                    navigate("/");
                }}
            >
                Logout
            </button>
        </div>
    );
};

export default Navbar;
