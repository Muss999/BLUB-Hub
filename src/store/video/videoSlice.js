import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./accountAction";
import { addDataToLocalStorage, updateToken } from "../../helpers/functions";

const accountSlice = createSlice({
    name: "account",
    initialState: {
        currentAccount: null,
        status: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase();
    },
});

export default accountSlice.reducer;
