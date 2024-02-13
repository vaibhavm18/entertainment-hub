import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface show {
  title: string;
  name: string;
  first_air_date: string;
  poster_path: string;
  id: string;
  release_date: string;
  vote_average: string;
}

type FavState = {
  favorites: show[];
};
const initialState: FavState = {
  favorites: [],
};

type id = string;

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addShow: (state, action: PayloadAction<show>) => {
      state.favorites.push(action.payload);
    },
    removeShow: (state, action: PayloadAction<id>) => {
      state.favorites = state.favorites.filter((fav) => {
        return fav.id !== action.payload;
      });
    },
  },
});

export const { addShow, removeShow } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
