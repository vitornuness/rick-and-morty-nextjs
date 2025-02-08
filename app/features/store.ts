import { configureStore } from "@reduxjs/toolkit";
import lightBoxReducer from "./slicers/LightBoxSlice";
import paginationReducer from "./slicers/PaginationSlice";
import { charactersApi } from "./services/CharactersService";

export const store = configureStore({
  reducer: {
    lightbox: lightBoxReducer,
    pagination: paginationReducer,
    [charactersApi.reducerPath]: charactersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
