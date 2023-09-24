import { createSlice } from "@reduxjs/toolkit";
import { createVideo, getVideos, getOnePost, editVideo } from "./videoAction";

const accountSlice = createSlice({
    name: "account",
    initialState: {
        currentAccount: null,
        status: "",
        videos: [],
        loading: false,
        oneVideo: null,
        error: "",
    },
    reducers: {
        clearOneVideoState: (state) => {
            state.oneVideo = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getVideos.pending, (state) => {
                state.loading = true;
            })
            .addCase(getVideos.fulfilled, (state, action) => {
                state.loading = false;
                state.videos = action.payload.data.results;
            })
            .addCase(createVideo.fulfilled, (_, action) => {
                action.payload.navigate("/");
            })
            .addCase(getOnePost.pending, (state) => {
                state.loading = true;
            })
            .addCase(getOnePost.fulfilled, (state, action) => {
                state.loading = false;
                state.oneVideo = action.payload.data;
            })
            .addCase(getVideos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(editVideo.fulfilled, (_, action) => {
                action.payload.navigate("/");
            });
    },
});

export const { clearOneVideoState } = accountSlice.actions;

export default accountSlice.reducer;
