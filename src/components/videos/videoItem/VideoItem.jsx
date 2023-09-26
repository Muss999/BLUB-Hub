import React from "react";
// import "./videoItem.model.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./videoItem.module.css";

const VideoItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.video_container}>
      <div
        onClick={() => navigate(`/video-details/${item.slug}`)}
        className={styles.video_item}
      >
        <div className={styles.video_preview_container}>
          <img src={item.video_preview} />
        </div>
        <div className={styles.video_item_text}>
          <h3>{item.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
