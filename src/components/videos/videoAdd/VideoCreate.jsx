import React, { useState } from "react";
import { createVideo } from "../../../store/video/videoAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const VideoCreate = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [videoObj, setvideoObj] = useState({
        slug: "S2ZYyvoDSVvDscLKMmXAloQk-0t2-9",
        title: "",
        description: "",
        in_stock: true,
        category: "",
    });
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <input
                type="text"
                placeholder="title"
                onChange={(e) =>
                    setvideoObj({ ...videoObj, title: e.target.value })
                }
            />
            <input
                type="file"
                placeholder="videos"
                onChange={(e) =>
                    setvideoObj({ ...videoObj, videos: e.target.value })
                }
            />
            <input
                type="text"
                placeholder="description"
                onChange={(e) =>
                    setvideoObj({ ...videoObj, description: e.target.value })
                }
            />
            <input
                type="text"
                placeholder="category"
                onChange={(e) =>
                    setvideoObj({ ...videoObj, category: e.target.value })
                }
            />
            <button
                onClick={() => dispatch(createVideo({ videoObj, navigate }))}>
                add video
            </button>
        </div>
    );
};

export default VideoCreate;
