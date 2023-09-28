import React from "react";
import "./videoDetailsItem.css";

const VideoDetailsItem = ({ item }) => {
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
                <button class="add-to-queue-button">Добавить в очередь</button>
            </div>
        </div>
    );
};

export default VideoDetailsItem;
