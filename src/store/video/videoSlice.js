import { createSlice } from "@reduxjs/toolkit";
import { createVideo, getVideos, getOnePost, editVideo } from "./videoAction";
import { setPage } from "./videoAction";

const videoSlice = createSlice({
    name: "videos",
    initialState: {
        currentAccount: null,
        status: "",
        videos: [],
        loading: false,
        oneVideo: null,
        error: "",
        search: "",
        currentPage: 1,
        totalPages: 1,
    },
    reducers: {
        clearOneVideoState: (state) => {
            state.oneVideo = null;
        },
        changeSearchVal: (state, action) => {
            state.search = action.payload.search;
            state.currentPage = 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getVideos.pending, (state) => {
                state.loading = true;
            })
            .addCase(getVideos.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload);
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
                console.log(action.payload.data);
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

export const { clearOneVideoState, changeSearchVal } = videoSlice.actions;
export default videoSlice.reducer;
