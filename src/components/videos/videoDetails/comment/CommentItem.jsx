import React from "react";
import "./commentStyle.css";

const CommentItem = ({ item }) => {
    console.log(item);
    return (
        <div>
            <div class="comment-container">
                <div class="comment-header">
                    <span class="comment-author">{item.author}</span>
                    <span class="comment-date">{item.created_at}</span>
                </div>
                <div class="comment-text">{item.body}</div>
            </div>
        </div>
    );
};

export default CommentItem;
