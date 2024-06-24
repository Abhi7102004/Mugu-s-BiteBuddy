// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].count += 1; // Increment count if item already exists
      } else {
        state.items.push({ ...action.payload, count: 1 }); // Add new item with count 1
      }
    },
    removeItem: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload
      );
      if (existingItemIndex >= 0) {
        if (state.items[existingItemIndex].count > 1) {
          state.items[existingItemIndex].count -= 1; // Decrease count if more than 1
        } else {
          state.items.splice(existingItemIndex, 1); // Remove item if count is 1
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
