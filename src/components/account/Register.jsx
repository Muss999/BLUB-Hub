import React, { useState, useEffect } from "react";
import styles from "./register.module.css";
import { useDispatch, useSelector } from "react-redux";
import { clearStatus } from "../../store/account/accountSlice";
import { registerUser } from "../../store/account/accountAction";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [userObj, setUserObj] = useState({
        email: "",
        login: "",
        password: "",
        passwordConfirm: "",
    });
    const { status } = useSelector((state) => state.account);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(clearStatus());
    }, []);

    return (
        <div>
            <h3>Register</h3>
            {status === "error" ? (
                <div>
                    <h3>You catch some ERROR</h3>
                    <button onClick={() => dispatch(clearStatus())}>
                        Try again!
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
                        type="text"
                        placeholder="UserName"
                        onChange={(e) =>
                            setUserObj({ ...userObj, login: e.target.value })
                        }
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) =>
                            setUserObj({ ...userObj, password: e.target.value })
                        }
                    />
                    <input
                        type="password"
                        placeholder="password Confirm"
                        onChange={(e) =>
                            setUserObj({
                                ...userObj,
                                passwordConfirm: e.target.value,
                            })
                        }
                    />

                    <button
                        onClick={() =>
                            dispatch(registerUser({ userObj, navigate }))
                        }
                    >
                        Register
                    </button>
                </div>
            )}
        </div>
    );
};

export default Register;
