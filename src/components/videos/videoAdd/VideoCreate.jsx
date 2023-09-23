import React, { useState } from "react";
import { createVideo } from "../../../store/video/videoAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./videoCreate.model.css";

const VideoCreate = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const categories = [
        { id: 1, name: "titkok" },
        { id: 2, name: "video" },
    ];

    const [videoObj, setVideoObj] = useState({
        videos: null,
        video_preview: null,
        title: "",
        description: "",
        topics: categories[0].name,
    });

    return (
        <div className="create__video__block">
            <div className="create__input__block">
                <label className="file-upload-button">
                    <input
                        type="file"
                        className="video__input"
                        onChange={(e) =>
                            setVideoObj({
                                ...videoObj,
                                videos: e.target.files[0],
                            })
                        }
                    />
                    Загрузить видео
                </label>

                <label className="file-upload-button">
                    <input
                        type="file"
                        className="video__input"
                        onChange={(e) =>
                            setVideoObj({
                                ...videoObj,
                                video_preview: e.target.files[0],
                            })
                        }
                    />
                    Загрузить превью
                </label>

                <input
                    type="text"
                    className="input__video"
                    placeholder="title"
                    onChange={(e) =>
                        setVideoObj({ ...videoObj, title: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="description"
                    onChange={(e) =>
                        setVideoObj({
                            ...videoObj,
                            description: e.target.value,
                        })
                    }
                />

                <select
                    value={videoObj.selectedCategory}
                    onChange={(e) =>
                        setVideoObj({
                            ...videoObj,
                            selectedCategory: parseInt(e.target.value),
                        })
                    }>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>

                <button
                    onClick={() =>
                        dispatch(createVideo({ videoObj, navigate }))
                    }>
                    add video
                </button>
            </div>
        </div>
    );
};

export default VideoCreate;
