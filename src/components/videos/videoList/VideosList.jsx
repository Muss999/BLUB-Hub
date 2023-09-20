import React from "react";
import { isUserLogin } from "../../../helpers/functions";
import { createPost } from "../../../store/video/videoAction";
import { useNavigate } from "react-router-dom";

const VideosList = () => {
    const navigate = useNavigate();
    return (
        <div>
            {isUserLogin && (
                <>
                    <button onClick={() => navigate("/video-create")}>
                        AddVideo
                    </button>
                </>
            )}
        </div>
    );
};

export default VideosList;
