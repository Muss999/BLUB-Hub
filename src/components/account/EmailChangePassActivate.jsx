import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getActivateCode } from "../../store/account/accountAction";

const EmailChangePassActivate = () => {
    const [userObj, setUserObj] = useState({
        email: "",
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div>
            <h3>Get activate code!</h3>
            <input
                type="email"
                placeholder="Email"
                onChange={(e) =>
                    setUserObj({ ...userObj, email: e.target.value })
                }
            />
            <button
                onClick={() => {
                    dispatch(getActivateCode({ userObj, navigate }));
                    navigate("/change-password-by-email");
                }}
            >
                Get Code!
            </button>
        </div>
    );
};

export default EmailChangePassActivate;
