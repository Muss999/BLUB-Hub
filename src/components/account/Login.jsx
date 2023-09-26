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
            {status === "error" ? (
                <div>
                    <h3>you catch some ERROR</h3>
                    <button onClick={() => dispatch(clearStatus())}>
                        try again!
                    </button>
                </div>
            ) : (
                <div>
                    <div className="decor">
                        <div className="form-left-decoration"></div>
                        <div className="form-right-decoration"></div>
                        <div className="circle"></div>
                        <div className="form-inner">
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
                                }
                            >
                                Forgot your password?
                            </p>
                            <button
                                className="login-btn"
                                onClick={() => {
                                    dispatch(loginUser({ userObj, navigate }));
                                    navigate("/");
                                }}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
