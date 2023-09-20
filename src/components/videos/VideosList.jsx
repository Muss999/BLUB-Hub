import React from "react";
import { isUserLogin } from "../../helpers/functions";

const VideosList = () => {
    return (
        <div>
            {!isUserLogin && (
                <>
                    <button>AddVideo</button>
                </>
            )}
        </div>
    );
};

export default VideosList;
