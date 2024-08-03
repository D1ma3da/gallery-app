import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { galleryApi } from "../services/galleryApi";
import themeReducer from "../features/themeSlice";

const store = configureStore({
  reducer: {
    [galleryApi.reducerPath]: galleryApi.reducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(galleryApi.middleware),
});

setupListeners(store.dispatch);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
