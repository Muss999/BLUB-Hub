import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";
import { getAuthConfig } from "../../helpers/functions";
const config = getAuthConfig();

export const getVideos = createAsyncThunk("video/getVideos", async () => {
    const { data } = await axios.get(`${API}/videos/`);
    return { data };
});
export const createVideo = createAsyncThunk(
    "video/createVideo",
    async ({ videoObj, navigate }, { dispatch }) => {
        const newVideo = new FormData();
        newVideo.append("slug", videoObj.slug);
        newVideo.append("title", videoObj.title);
        newVideo.append("description", videoObj.description);
        newVideo.append("in_stock", videoObj.in_stock);
        newVideo.append("category ", videoObj.category);

        const { data } = await axios.post(
            `${API}/api/v1/videos/
            `,
            newVideo,
            config ? config : null
        );
        dispatch(getVideos());
        console.log("WORK");
        return { data, navigate };
    }
);
