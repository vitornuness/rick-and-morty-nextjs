import { configureStore } from "@reduxjs/toolkit";
import lightBoxReducer from "./slicers/LightBoxSlice";

export const store = configureStore({
  reducer: {
    lightbox: lightBoxReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
