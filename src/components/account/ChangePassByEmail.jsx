import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePassByCode } from "../../store/account/accountAction";

const ChangePassByEmail = () => {
    const [userObj, setUserObj] = useState({
        code: "",
        email: "",
        password: "",
        password_confirm: "",
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <h3>Change password by email</h3>
            <input
                type="text"
                placeholder="Code"
                minLength="1"
                onChange={(e) =>
                    setUserObj({ ...userObj, code: e.target.value })
                }
            />
            <input
                type="email"
                placeholder="Email"
                minLength="1"
                onChange={(e) =>
                    setUserObj({ ...userObj, email: e.target.value })
                }
            />
            <input
                type="text"
                placeholder="Password"
                minLength="4"
                onChange={(e) =>
                    setUserObj({ ...userObj, password: e.target.value })
                }
            />
            <input
                type="text"
                placeholder="Password Confirm"
                minLength="4"
                onChange={(e) =>
                    setUserObj({ ...userObj, passwordConfirm: e.target.value })
                }
            />
            <button
                onClick={() => {
                    dispatch(changePassByCode({ userObj, navigate }));
                    navigate("/");
                }}
            >
                Change Password
            </button>
            <p onClick={() => navigate("/change-password")}>
                Remember your password?
            </p>
        </div>
    );
};

export default ChangePassByEmail;
