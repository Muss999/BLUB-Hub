import React, { useState, useEffect } from "react";
import styles from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { clearStatus } from "../../store/account/accountSlice";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../store/account/accountAction";

const Login = () => {
    const [userObj, setUserObj] = useState({
        email: "",
        password: "",
    });
    const { status } = useSelector((state) => state.account);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(clearStatus());
    }, []);

    return (
        <div>
            <h3>Login</h3>
            {status === "error" ? (
                <div>
                    <h3>you catch some ERROR</h3>
                    <button onClick={() => dispatch(clearStatus())}>
                        try again!
                    </button>
                </div>
            ) : (
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) =>
                            setUserObj({ ...userObj, email: e.target.value })
                        }
                    />

                    <input
                        type="password"
                        minLength="6"
                        placeholder="Password"
                        onChange={(e) =>
                            setUserObj({ ...userObj, password: e.target.value })
                        }
                    />

                    <button
                        onClick={() =>
                            dispatch(loginUser({ userObj, navigate }))
                        }
                    >
                        Login
                    </button>
                </div>
            )}
        </div>
    );
};

export default Login;
