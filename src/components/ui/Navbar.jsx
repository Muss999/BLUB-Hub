import React from "react";
import styles from "./navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/register")}>Register</button>
            <button onClick={() => navigate("/login")}>Login</button>
        </div>
    );
};

export default Navbar;
