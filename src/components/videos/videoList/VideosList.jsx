import React, { useEffect } from "react";
import { isUserLogin } from "../../../helpers/functions";
import { getVideos } from "../../../store/video/videoAction";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import VideoItem from "../videoItem/VideoItem";
import "./videoList.model.css";

const VideosList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { videos, loading } = useSelector((state) => state.videos);
    useEffect(() => {
        dispatch(getVideos());
    }, []);
    console.log(videos);
    return (
        <div className="videoList_block">
            {loading ? (
                <h2>loading...</h2>
            ) : (
                <>
                    {videos.map((item, index) => (
                        <VideoItem key={index} item={item} />
                    ))}
                </>
            )}
        </div>
    );
};

export default VideosList;
