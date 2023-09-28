import React, { useState } from "react";
import "./videoDetailsItem.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createWatchLater } from "../../../../store/video/videoAction";

const VideoDetailsItem = ({ item }) => {
    const id = item.slug;
    const dispatch = useDispatch();
    const [watchLaterObj, setWatchLaterObj] = useState({
        video: item.video,
    });
    const navigate = useNavigate();
    return (
        <div class="video-item-container">
            <div class="video-preview">
                <img src={item.video_preview} alt="Превью видео" />
                <span class="video-duration">12:34</span>
            </div>
            <div className="right_video_item_block">
                <div class="video-info">
                    <h3 class="video-title">{item.title}</h3>
                </div>
                <button
                    class="add-to-queue-button"
                    onClick={() => {
                        dispatch(
                            createWatchLater({
                                watchLaterObj,
                                id,
                                navigate,
                            })
                        );
                    }}>
                    {" "}
                    watch later
                </button>
                <div></div>
            </div>
        </div>
    );
};

export default VideoDetailsItem;
