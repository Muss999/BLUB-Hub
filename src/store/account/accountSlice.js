import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./accountAction";
import { addDataToLocalStorage, updateToken } from "../../helpers/functions";

const accountSlice = createSlice({
    name: "account",
    initialState: {
        currentAccount: null,
        status: "",
    },
    reducers: {
        clearCurrentAccount: (state) => {
            state.currentAccount = null;
        },
        clearStatus: (state) => {
            state.status = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (_, action) => {
                console.log("RegisterUser work");
                action.payload.navigate("/activate-acc");
            })
            .addCase(registerUser.rejected, (state) => {
                console.log("RegisterUser doesn't work");
                state.status = "error";
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log("login is working");
                state.currentAccount = action.payload.userEmail;
                addDataToLocalStorage(
                    action.payload.userEmail,
                    action.payload.data
                );
                updateToken();
                action.payload.navigate("/");
            })
            .addCase(loginUser.rejected, (state) => {
                console.log("login is not working");
                state.status = "error";
            });
    },
});

export const { clearCurrentAccount, clearStatus } = accountSlice.actions;
export default accountSlice.reducer;
