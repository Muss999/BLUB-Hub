import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearStatus } from "../../store/account/accountSlice";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../store/account/accountAction";

const ChangePassword = () => {
    const [userObj, setUserObj] = useState({
        oldPassword: "",
        newPassword: "",
        newPasswordConfirm: "",
    });
    const { status } = useSelector((state) => state.account);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div>
            <h3>Change Password</h3>
            <input
                type="password"
                placeholder="Old Password"
                minLength="4"
                onChange={(e) =>
                    setUserObj({ ...userObj, oldPassword: e.target.value })
                }
            />
            <input
                type="password"
                placeholder="New Password"
                minLength="4"
                onChange={(e) =>
                    setUserObj({ ...userObj, newPassword: e.target.value })
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
                    console.log(userObj);
                    dispatch(changePassword({ userObj, navigate }));
                }}
            >
                Change Password
            </button>
        </div>
    );
};

export default ChangePassword;
