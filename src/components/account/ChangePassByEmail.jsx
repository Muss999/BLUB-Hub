import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../store/account/accountAction";

const ChangePassByEmail = () => {
    const [userObj, setUserObj] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <h3>Change password by email</h3>
            <input
                type="password"
                placeholder="Password"
                minLength="1"
                onChange={(e) =>
                    setUserObj({ ...userObj, email: e.target.value })
                }
            />
            <input
                type="password"
                placeholder="Password"
                minLength="1"
                onChange={(e) =>
                    setUserObj({ ...userObj, email: e.target.value })
                }
            />
            <input
                type="password"
                placeholder="Password"
                minLength="1"
                onChange={(e) =>
                    setUserObj({ ...userObj, email: e.target.value })
                }
            />

            <button
                onClick={() => {
                    dispatch(changePassword({ userObj, navigate }));
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
