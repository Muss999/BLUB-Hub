import React from "react";
import "./videoItem.model.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const VideoItem = ({ item }) => {
    const navigate = useNavigate();
    return (
        <Link to={`/video-details/${item.title}`} className="video_item">
            <img src={item.video_preview} alt="" width="100px" height="100px" />
            <h3>{item.title}</h3>
        </Link>
    );
};

export default VideoItem;
