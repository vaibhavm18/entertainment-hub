import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "../features/bookmark/bookmark";

const store = configureStore({
  reducer: {
    bookmark: bookmarkReducer,
  },
});

export default store;
