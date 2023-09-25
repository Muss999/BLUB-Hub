import React, { useState, useEffect } from "react";
import "./login.css";
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
                    {/* <input
                        type="email"
                        placeholder="Email"
                        minLength="1"
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
                        }>
                        Login
                    </button> */}

                    <form class="decor">
                        <div class="form-left-decoration"></div>
                        <div class="form-right-decoration"></div>
                        <div class="circle"></div>
                        <div class="form-inner">
                            <h3>Login</h3>
                            <input
                                type="email"
                                placeholder="Email"
                                minLength="1"
                                onChange={(e) =>
                                    setUserObj({
                                        ...userObj,
                                        email: e.target.value,
                                    })
                                }
                            />
                            <input
                                type="password"
                                minLength="6"
                                placeholder="Password"
                                onChange={(e) =>
                                    setUserObj({
                                        ...userObj,
                                        password: e.target.value,
                                    })
                                }
                            />
                            <p
                                onClick={() =>
                                    navigate("/change-pass-get-code")
                                }>
                                Forgot your password?
                            </p>
                            <input
                                type="submit"
                                value="Login"
                                onClick={() =>
                                    dispatch(loginUser({ userObj, navigate }))
                                }
                            />
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Login;
