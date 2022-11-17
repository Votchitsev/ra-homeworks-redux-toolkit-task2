import { configureStore } from "@reduxjs/toolkit";
import images from "./reducer";

export const store = configureStore({
  reducer: images,
});
