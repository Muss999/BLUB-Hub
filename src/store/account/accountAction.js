import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";
import { getAuthConfig } from "../../helpers/functions";
import { getVideos } from "../video/videoAction";

const config = getAuthConfig();

export const registerUser = createAsyncThunk(
    "account/registerUser",
    async ({ userObj, navigate }) => {
        let formData = new FormData();
        formData.append("email", userObj.email);
        formData.append("login", userObj.login);
        formData.append("password", userObj.password);
        formData.append("password_confirm", userObj.passwordConfirm);
        let { data } = await axios.post(
            `${API}api/v1/account/register/`,
            formData
        );
        return { data, navigate };
    }
);

export const loginUser = createAsyncThunk(
    "account/loginUser",
    async ({ userObj, navigate }) => {
        let formData = new FormData();
        formData.append("email", userObj.email);
        formData.append("password", userObj.password);
        let { data } = await axios.post(
            `${API}api/v1/account/login/`,
            formData
        );
        return { data, navigate, userEmail: userObj.email };
    }
);

export const changePassword = createAsyncThunk(
    "account/loginUser",
    async ({ userObj, navigate }) => {
        let formData = new FormData();
        formData.append("old_password", userObj.oldPassword);
        formData.append("new_password", userObj.newPassword);
        formData.append("new_password_confirm", userObj.newPasswordConfirm);
        let { data } = await axios.post(
            `${API}api/v1/account/change_password/`,
            formData,
            config ? config : null
        );
        return { data, navigate };
    }
);

export const getActivateCode = createAsyncThunk(
    "account/getActivateCode",
    async ({ userObj, navigate }) => {
        let formData = new FormData();
        formData.append("email", userObj.email);
        let { data } = await axios.post(
            `${API}api/v1/account/lose_password/`,
            formData
        );
        console.log(data);
        return { data, navigate };
    }
);

export const changePassByCode = createAsyncThunk(
    "account/changePassByCode",
    async ({ userObj, navigate }) => {
        let formData = new FormData();
        formData.append("code", userObj.code);
        formData.append("email", userObj.email);
        formData.append("password", userObj.password);
        formData.append("password_confirm", userObj.passwordConfirm);
        let { data } = await axios.post(
            `${API}api/v1/account/lose_confirm/`,
            formData
        );
        return { data, navigate };
    }
);
