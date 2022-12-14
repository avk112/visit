import {configureStore} from "@reduxjs/toolkit";
import hiddenScreensReducer from "./hiddenScreensSlice";


export const store= configureStore({
    reducer: {
        hiddenScreens: hiddenScreensReducer
    }
})