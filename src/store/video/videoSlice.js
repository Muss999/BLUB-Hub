import { createSlice } from "@reduxjs/toolkit";
import { createVideo } from "./videoAction";

const accountSlice = createSlice({
    name: "account",
    initialState: {
        currentAccount: null,
        status: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createVideo.fulfilled, (_, action) => {
            action.payload.navigate("/");
        });
    },
});

export default accountSlice.reducer;
