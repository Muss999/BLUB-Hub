import React from "react";
// import "./videoItem.model.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./videoItem.module.css";

const VideoItem = ({ item }) => {
    const navigate = useNavigate();
    return (
        <>
            <div
                class={style.video_item}
                onClick={() => navigate(`/video-details/${item.slug}`)}>
                <div class={style.thumbnail}>
                    <img src={item.video_preview} alt="Video Thumbnail" />
                    <span class={style.duration}>10:00</span>
                </div>
                <div class={style.info}>
                    <h3 class={style.title}>{item.title}</h3>
                    <p class={style.creator}>{item.slug}</p>
                </div>
            </div>
        </>
    );
};

export default VideoItem;
