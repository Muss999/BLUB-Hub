import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";
import { getAuthConfig } from "../../helpers/functions";

export const getVideos = createAsyncThunk("video/getVideos", async () => {
    const { data } = await axios.get(`${API}api/v1/videos/`);
    return { data };
});
export const createVideo = createAsyncThunk(
    "video/createVideo",

    async ({ videoObj, navigate }, { dispatch }) => {
        const config = getAuthConfig();

        const newVideo = new FormData();

        newVideo.append("videos", videoObj.videos);
        newVideo.append("video_preview", videoObj.video_preview);
        newVideo.append("title", videoObj.title);
        newVideo.append("description", videoObj.description);
        newVideo.append("topics", videoObj.topics);

        console.log(newVideo.get("videos"));
        console.log(newVideo.get("video_preview"));

        const { data } = await axios.post(
            `${API}api/v1/videos/
            `,
            newVideo,
            config ? config : null
        );
        dispatch(getVideos());

        return { data, navigate };
    }
);
export const getOnePost = createAsyncThunk(
    "video/getOnePost",
    async ({ id }) => {
        try {
            const { data } = await axios.get(`${API}api/v1/videos/${id}/`);
            return { data };
        } catch (error) {
            throw error;
        }
    }
);

export const deleteVideo = createAsyncThunk(
    "video/deleteVideo",
    async ({ id }, { dispatch }) => {
        const config = getAuthConfig();

        try {
            await axios.delete(
                `${API}api/v1/videos/${id}/`,
                config ? config : null
            );
            dispatch(getVideos());
        } catch (error) {
            throw error;
        }
    }
);

export const editVideo = createAsyncThunk(
    "video/editVideo",
    async ({ videoObj, id, navigate }, { dispatch }) => {
        console.log({ videoObj, id, navigate });
        const config = getAuthConfig();
        const updatedProduct = new FormData();
        updatedProduct.append("videos", videoObj.videos);
        updatedProduct.append("video_preview", videoObj.video_preview);
        updatedProduct.append("title", videoObj.title);
        updatedProduct.append("description", videoObj.description);
        updatedProduct.append("topics", videoObj.topics);

        const { data } = await axios.put(
            `${API}api/v1/videos/${id}/`,
            updatedProduct,
            config ? config : null
        );
        dispatch(getVideos());
        return { data, navigate };
    }
);

export const addComment = createAsyncThunk(
    "video/addComment",
    async ({ commentObj, id }, { dispatch }) => {
        const config = getAuthConfig();
        const comment = new FormData();
        comment.append("body", commentObj.body);
        const { data } = await axios.post(
            `${API}api/v1/videos/${id}/comments/`,
            comment,
            config ? config : null
        );
        dispatch(getVideos());
        return { data };
    }
);

export const toggleLike = createAsyncThunk(
    "video/addComment",
    async ({ id }) => {
        await axios.post(`${API}api/v1/videos/${id}/like/`);
    }
);
