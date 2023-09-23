import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOnePost, deleteVideo } from "../../../store/video/videoAction";
import { clearOneVideoState } from "../../../store/video/videoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const VideoDetails = () => {
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

    return (
        <div>
            {loading ? (
                <h3>Loading</h3>
            ) : (
                <>
                    {error ? (
                        <h2>{error.message}</h2>
                    ) : (
                        <>
                            {oneVideo ? (
                                <>
                                    <video
                                        src={oneVideo.videos}
                                        controls
                                        preload="auto"></video>
                                    <h3>{oneVideo.videos}</h3>
                                    <h3>{oneVideo.video_preview}</h3>
                                    <button
                                        onClick={() => {
                                            dispatch(deleteVideo({ id }));
                                            navigate("/");
                                        }}>
                                        delete
                                    </button>
                                    <button
                                        onClick={() => {
                                            navigate(`/video-edit/${id}`);
                                        }}>
                                        edit
                                    </button>
                                </>
                            ) : (
                                <p>No video data available</p>
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default VideoDetails;
