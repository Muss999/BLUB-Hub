import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";
import { getAuthConfig } from "../../helpers/functions";

export const getVideos = createAsyncThunk(
    "videos/getVideos",
    async (_, { getState }) => {
        const { search } = getState().videos;
        const { data } = await axios.get(
            `${API}api/v1/videos/?search=${search}`
        );
        return { data };
    }
);
export const createVideo = createAsyncThunk(
    "videos/createVideo",
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
    "videos/getOnePost",
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
    "videos/deleteVideo",
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
    "videos/editVideo",
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
    "videos/addComment",
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
    "video/toggleLike",
    async ({ id }) => {
        const config = getAuthConfig();
        try {
            const response = await axios.post(
                `${API}api/v1/videos/${id}/like/`,
                null, // Пустое тело запроса, если данные не требуются
                config ? config : null
            );
            console.log("Успешный запрос:", response.data);
            // Вы можете здесь выполнить дополнительные действия, например, обновить данные в Redux Store
            return response.data; // Вернуть данные, если необходимо
        } catch (error) {
            console.error("Ошибка запроса:", error);
            throw error; // Повторно выбросить ошибку для обработки в компоненте
        }
    }
);
