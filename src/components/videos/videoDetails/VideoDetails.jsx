import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOnePost, deleteVideo } from "../../../store/video/videoAction";
import { clearOneVideoState } from "../../../store/video/videoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./videoDetails.css";
import likeIcon from "./img/1555605-200-removebg-preview.png";
import disLiekItem from "./img/images-removebg-preview (1).png";
import { addComment } from "../../../store/video/videoAction";
import CommentItem from "./comment/CommentItem";
import { toggleLike } from "../../../store/video/videoAction";

const VideoDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { oneVideo, error, loading } = useSelector((state) => state.videos);
    useEffect(() => {
        dispatch(getOnePost({ id }));
        return () => {
            dispatch(clearOneVideoState());
        };
    }, [id]);

    const [commentObj, setCommentObj] = useState({
        body: "",
    });
    console.log(oneVideo);

    return (
        <div>
            {loading ? (
                <h3>Loading</h3>
            ) : (
                <>
                    {error ? (
                        <h2>{error.message}</h2>
                    ) : (
                        <>
                            {oneVideo ? (
                                <>
                                    <div className="">
                                        <div className="video__block">
                                            <video
                                                src={oneVideo.videos}
                                                controls
                                                preload="auto"
                                                className="main__video"
                                                style={{
                                                    width: "100%", // Keep the width at 100% to maintain aspect ratio
                                                    maxWidth: "800px", // Set a maximum width if necessary
                                                    height: "500px",
                                                    display: "block", // Center the video horizontally
                                                    borderRadius: "10px", // Add rounded corners
                                                    boxShadow:
                                                        "px 4px 6px rgba(0, 0, 0, 0.8)", // Add a subtle shadow
                                                }}
                                            ></video>
                                            <div className="info__block">
                                                <h2>{oneVideo.title}</h2>
                                                <p>
                                                    {" "}
                                                    создано:{" "}
                                                    {oneVideo.created_at}
                                                </p>
                                                <p>
                                                    {" "}
                                                    описание:{" "}
                                                    {oneVideo.description}
                                                </p>
                                                <div
                                                    className=""
                                                    style={{ display: "flex" }}
                                                >
                                                    <div className="like__block">
                                                        <img
                                                            className="likeIcon"
                                                            src={likeIcon}
                                                            alt=""
                                                            onClick={() =>
                                                                dispatch(
                                                                    toggleLike({
                                                                        id,
                                                                    })
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    <div className="like__block">
                                                        <img
                                                            className="likeIcon"
                                                            src={disLiekItem}
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => {
                                                dispatch(deleteVideo({ id }));
                                                navigate("/");
                                            }}
                                        >
                                            delete
                                        </button>
                                        <button
                                            onClick={() => {
                                                navigate(`/video-edit/${id}`);
                                            }}
                                        >
                                            edit
                                        </button>
                                    </div>
                                    <input
                                        type="text"
                                        onChange={(e) =>
                                            setCommentObj({
                                                body: e.target.value,
                                            })
                                        }
                                    />
                                    <button
                                        onClick={() => {
                                            dispatch(
                                                addComment({ commentObj, id })
                                            );
                                        }}
                                    >
                                        Add comment
                                    </button>
                                    <div className="comments__block">
                                        <h2>
                                            {oneVideo.comments.length}{" "}
                                            коментариев
                                        </h2>
                                        {oneVideo.comments.map(
                                            (item, index) => (
                                                <CommentItem
                                                    key={index}
                                                    item={item}
                                                />
                                            )
                                        )}
                                    </div>
                                </>
                            ) : (
                                <p>No video data available</p>
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default VideoDetails;
