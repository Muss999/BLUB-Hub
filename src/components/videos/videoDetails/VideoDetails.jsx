import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    getOnePost,
    deleteVideo,
    getVideos,
} from "../../../store/video/videoAction";
import { clearOneVideoState } from "../../../store/video/videoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./videoDetails.css";
import likeIcon from "./img/1555605-200-removebg-preview.png";
import disLiekItem from "./img/images-removebg-preview (1).png";
import { addComment } from "../../../store/video/videoAction";
import CommentItem from "./comment/CommentItem";
import { toggleLike } from "../../../store/video/videoAction";
import { toggleDislike } from "../../../store/video/videoAction";
import VideoDetailsItem from "./videoDetailsItem/VideoDetailsItem";

const VideoDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { videos, oneVideo, error, loading } = useSelector(
        (state) => state.videos
    );

    useEffect(() => {
        dispatch(getOnePost({ id }));
        dispatch(getVideos());
        return () => {
            dispatch(clearOneVideoState());
        };
    }, [id]);

    const [commentObj, setCommentObj] = useState({
        body: "",
    });
    let user = localStorage.getItem("account");

    return (
        <div className="video-details-container">
            {loading ? (
                <h3>Loading</h3>
            ) : (
                <>
                    {error ? (
                        <h2 className="error-message">{error.message}</h2>
                    ) : (
                        <>
                            {oneVideo ? (
                                <div className="Video_details_block">
                                    <div>
                                        <div className="video-block">
                                            <video
                                                src={oneVideo.videos}
                                                controls
                                                preload="auto"
                                                className="main-video"></video>
                                            <div className="info-block">
                                                <h2 className="video-title">
                                                    {oneVideo.title}
                                                </h2>
                                                <p className="video-info">
                                                    создано:{" "}
                                                    {oneVideo.created_at}
                                                </p>
                                                <p className="video-info">
                                                    описание:{" "}
                                                    {oneVideo.description}
                                                </p>
                                                <div className="likes-dislikes">
                                                    <div className="like-block">
                                                        <div
                                                            className="like-block-img"
                                                            onClick={() =>
                                                                dispatch(
                                                                    toggleLike({
                                                                        id,
                                                                    })
                                                                )
                                                            }>
                                                            <img
                                                                className="likeIcon"
                                                                src={likeIcon}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <h2>
                                                            {oneVideo.likes}
                                                        </h2>
                                                    </div>
                                                    <div className="dislike-block">
                                                        <div
                                                            className="dislike-block-img"
                                                            onClick={() =>
                                                                dispatch(
                                                                    toggleDislike(
                                                                        {
                                                                            id,
                                                                        }
                                                                    )
                                                                )
                                                            }>
                                                            <img
                                                                className="dislikeIcon"
                                                                src={
                                                                    disLiekItem
                                                                }
                                                                alt=""
                                                            />
                                                        </div>
                                                        <h2>
                                                            {oneVideo.dislikes}
                                                        </h2>
                                                    </div>
                                                </div>
                                                <div className="video-actions">
                                                    {user != oneVideo.uesr && (
                                                        <>
                                                            <button
                                                                onClick={() => {
                                                                    dispatch(
                                                                        deleteVideo(
                                                                            {
                                                                                id,
                                                                            }
                                                                        )
                                                                    );
                                                                    navigate(
                                                                        "/"
                                                                    );
                                                                }}
                                                                className="delete-button">
                                                                Удалить
                                                            </button>
                                                            <button
                                                                onClick={() => {
                                                                    navigate(
                                                                        `/video-edit/${id}`
                                                                    );
                                                                }}
                                                                className="edit-button">
                                                                Редактировать
                                                            </button>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hiden_video_list">
                                            {videos.map((item, index) => (
                                                <VideoDetailsItem
                                                    key={index}
                                                    item={item}
                                                />
                                            ))}
                                        </div>
                                        <div className="comment-input">
                                            <textarea
                                                id="comment-text"
                                                placeholder="Оставьте комментарий"
                                                type="text"
                                                onChange={(e) =>
                                                    setCommentObj({
                                                        body: e.target.value,
                                                    })
                                                }
                                                className="czomment-textarea"></textarea>
                                            <button
                                                onClick={() => {
                                                    dispatch(
                                                        addComment({
                                                            commentObj,
                                                            id,
                                                        })
                                                    );
                                                }}
                                                className="add-comment-button">
                                                Добавить комментарий
                                            </button>
                                        </div>

                                        <div className="comments-block">
                                            <h2 className="comments-count">
                                                {oneVideo.comments.length}{" "}
                                                комментариев
                                            </h2>
                                            {oneVideo.comments.map((item) => (
                                                <CommentItem
                                                    item={item}
                                                    key={item.id}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="right__block">
                                        {videos.map((item, index) => (
                                            <VideoDetailsItem
                                                key={index}
                                                item={item}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <p className="no-data-message">
                                    Нет данных о видео
                                </p>
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default VideoDetails;
