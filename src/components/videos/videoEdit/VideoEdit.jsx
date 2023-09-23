import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getOnePost } from "../../../store/video/videoAction";
import { clearOneVideoState } from "../../../store/video/videoSlice";

const VideoEdit = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { oneVideo, error, loading } = useSelector((state) => state.videos);
    useEffect(() => {
        dispatch(getOnePost({ id }));
        return () => {
            dispatch(clearOneVideoState());
        };
    }, [id]);

    console.log(oneVideo);

    return <div>VideoEdit</div>;
};

export default VideoEdit;
