import React from "react";

const CommentItem = ({ item }) => {
    console.log(item);
    return (
        <div>
            <p>{item.author}</p>
            <h3>{item.body}</h3>
        </div>
    );
};

export default CommentItem;
