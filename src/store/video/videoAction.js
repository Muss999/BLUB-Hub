import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";

export const createPost = createAsyncThunk(
    "video/createPost",
    async (newPost, { dispatch }) => {
        const { data } = await axios.post(`${API}/post`, newPost);
        return { data };
    }
);
