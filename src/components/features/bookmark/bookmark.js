import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addShow: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeShow: (state, action) => {
      state.favorites = state.favorites.filter((fav) => {
        return fav.id !== action.payload;
      });
    },
  },
});

export const { addShow, removeShow } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
