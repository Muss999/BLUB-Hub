import React from "react";
import "./commentStyle.css";
import { useNavigate } from "react-router-dom";
import { API } from "../../../../helpers/consts";

const CommentItem = ({ item }) => {
    const navigate = useNavigate();

    const handleCommentClick = () => {
        let currentURL = window.location.href;
        let words = currentURL.split("/");
        words.splice(-1);
        let newURL = words.join("/");
        console.log(newURL);
        window.location.href = newURL;
        navigate(`/video-details/${item.slug}`);
    };

    return (
        <div onClick={handleCommentClick}>
            <div className="comment-container">
                <div className="comment-header">
                    <span className="comment-author">{item.author}</span>
                    <span className="comment-date">{item.created_at}</span>
                </div>
                <div className="comment-text">{item.body}</div>
            </div>
        </div>
    );
};

export default CommentItem;
