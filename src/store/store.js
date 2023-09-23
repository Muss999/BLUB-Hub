import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./account/accountSlice";
import videoReducer from "./video/videoSlice";

export default configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    reducer: {
        account: accountReducer,
        videos: videoReducer,
    },
});
