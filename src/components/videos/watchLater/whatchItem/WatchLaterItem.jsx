import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./watchLater.module.css";

const WatchLaterItem = ({ item }) => {
    const navigate = useNavigate();
    console.log(item.video);
    return (
        <div
            className={style.video_item}
            onClick={() => navigate(`/video-details/${item.video.slug}`)}>
            <div className={style.thumbnail}>
                <img src={item.video.video_preview} alt="Video Thumbnail" />
                <span className={style.duration}>10:00</span>
            </div>
            <div className={style.info}>
                <h3 className={style.title}>{item.title}</h3>
                <p className={style.creator}>{item.slug}</p>
            </div>
        </div>
    );
};

export default WatchLaterItem;
