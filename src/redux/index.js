import { configureStore } from "@reduxjs/toolkit";
import trackerSlice from "./slice/trackerSlice";

export const store = configureStore({
    reducer: {
        cases: trackerSlice
    }
})