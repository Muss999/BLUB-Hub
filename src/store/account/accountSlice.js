import { createSlice } from "@reduxjs/toolkit";

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
});

export const { clearCurrentAccount, clearStatus } = accountSlice.actions;
export default accountSlice.reducer;
