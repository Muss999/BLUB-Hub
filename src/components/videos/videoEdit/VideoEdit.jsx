import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getOnePost } from "../../../store/video/videoAction";
import { clearOneVideoState } from "../../../store/video/videoSlice";
import { editVideo } from "../../../store/video/videoAction";

const VideoEdit = () => {
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

    const categories = [
        { id: 1, name: "titkok" },
        { id: 2, name: "video" },
    ];

    const [videoObj, setVideoObj] = useState(oneVideo);

    return (
        <div>
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                <>
                    {error ? (
                        <h2>{error}</h2> // Выведите текст ошибки
                    ) : (
                        <>
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
                                                    video_preview:
                                                        e.target.files[0],
                                                })
                                            }
                                        />
                                        Загрузить превью
                                    </label>

                                    <input
                                        type="text"
                                        className="input__video"
                                        placeholder="title"
                                        value={videoObj.title}
                                        onChange={(e) =>
                                            setVideoObj({
                                                ...videoObj,
                                                title: e.target.value,
                                            })
                                        }
                                    />
                                    <input
                                        type="text"
                                        placeholder="description"
                                        value={videoObj.description}
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
                                                selectedCategory: parseInt(
                                                    e.target.value
                                                ),
                                            })
                                        }>
                                        {categories.map((category) => (
                                            <option
                                                key={category.id}
                                                value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>

                                    <button
                                        onClick={() =>
                                            dispatch(
                                                editVideo({
                                                    videoObj,
                                                    id,
                                                    navigate,
                                                })
                                            )
                                        }>
                                        edit video
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default VideoEdit;
