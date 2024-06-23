import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favouriteItems: [],
  },
  reducers: {
    addFavouriteItem: (state, action) => {
      state.favouriteItems.push(action.payload);
    },
    removeFavouriteItem: (state, action) => {
      const index = state.favouriteItems.findIndex(item => item.info.id === action.payload);
      if (index !== -1) {
        state.favouriteItems.splice(index, 1);
      }
    },
    clearFavourite: (state) => {
      state.favouriteItems = [];
    },
  },
});

export const { addFavouriteItem, removeFavouriteItem, clearFavourite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
