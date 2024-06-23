import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import favouriteReducer from "./favoriteSlice";
const cartStore = configureStore({
  reducer: {
    cart: cartReducer,
    favourite: favouriteReducer,
  },
});

export default cartStore;
