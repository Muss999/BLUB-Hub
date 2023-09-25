import React, { useState, useEffect } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { clearStatus } from "../../store/account/accountSlice";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../store/account/accountAction";

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
            {status === "error" ? (
                <div>
                    <h3>You catch some ERROR</h3>
                    <button onClick={() => dispatch(clearStatus())}>
                        Try again!
                    </button>
                </div>
            ) : (
                <div>
                    <form className="decor">
                        <div className="form-left-decoration"></div>
                        <div className="form-right-decoration"></div>
                        <div className="circle"></div>
                        <div className="form-inner">
                            <h3>Register</h3>

                            <input
                                type="email"
                                placeholder="Email"
                                maxLength="254"
                                minLength="1"
                                onChange={(e) =>
                                    setUserObj({
                                        ...userObj,
                                        email: e.target.value,
                                    })
                                }
                            />

                            <input
                                type="text"
                                placeholder="UserName"
                                maxLength="12"
                                minLength="1"
                                onChange={(e) =>
                                    setUserObj({
                                        ...userObj,
                                        login: e.target.value,
                                    })
                                }
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                maxLength="128"
                                minLength="6"
                                onChange={(e) =>
                                    setUserObj({
                                        ...userObj,
                                        password: e.target.value,
                                    })
                                }
                            />

                            <input
                                type="password"
                                placeholder="password Confirm"
                                maxLength="128"
                                minLength="6"
                                onChange={(e) =>
                                    setUserObj({
                                        ...userObj,
                                        passwordConfirm: e.target.value,
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
                            <input
                                type="submit"
                                value="register"
                                onClick={() => {
                                    dispatch(
                                        registerUser({ userObj, navigate })
                                    );
                                    navigate("/login");
                                }}
                            />
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Register;
