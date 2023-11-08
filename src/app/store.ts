import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "../bookmark/bookmark";
const store = configureStore({
  reducer: {
    bookmark: bookmarkReducer,
  },
});

export default store;
