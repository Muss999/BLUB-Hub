import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWatchLater } from "../../../store/video/videoAction";
import { useSelector } from "react-redux";
import WatchLaterItem from "./whatchItem/WatchLaterItem";

const VideoWatchLater = () => {
    const { watchLater, videos, loading } = useSelector(
        (state) => state.videos
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWatchLater());
    }, []);
    console.log(watchLater);

    return (
        <div className="videoList_block">
            {loading ? (
                <h2>loading...</h2>
            ) : (
                <>
                    {watchLater.map((item, index) => (
                        <WatchLaterItem key={index} item={item} />
                    ))}
                </>
            )}
        </div>
    );
};

export default VideoWatchLater;
