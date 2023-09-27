import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../store/account/accountAction";
import "./login.css";

const ChangePassword = () => {
    const [userObj, setUserObj] = useState({
        oldPassword: "",
        newPassword: "",
        newPasswordConfirm: "",
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <div className="decor">
                    <div className="form-left-decoration"></div>
                    <div className="form-right-decoration"></div>
                    <div className="circle"></div>
                    <div className="form-inner">
                        <h3>change password</h3>
                        <input
                            type="password"
                            placeholder="Old Password"
                            minLength="4"
                            onChange={(e) =>
                                setUserObj({
                                    ...userObj,
                                    oldPassword: e.target.value,
                                })
                            }
                        />
                        <input
                            type="password"
                            placeholder="New Password"
                            minLength="4"
                            onChange={(e) =>
                                setUserObj({
                                    ...userObj,
                                    newPassword: e.target.value,
                                })
                            }
                        />
                        <input
                            type="password"
                            placeholder="New Password Confirm"
                            minLength="4"
                            onChange={(e) =>
                                setUserObj({
                                    ...userObj,
                                    newPasswordConfirm: e.target.value,
                                })
                            }
                        />

                        <button
                            onClick={() => {
                                navigate("/");
                                dispatch(changePassword({ userObj, navigate }));
                            }}>
                            Change Password
                        </button>

                        <p onClick={() => navigate("/change-pass-get-code")}>
                            Forgot your password?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
