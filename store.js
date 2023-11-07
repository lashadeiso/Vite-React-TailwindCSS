import { configureStore } from '@reduxjs/toolkit';
import userReducer from './src/features/user/userSlice';
import cartReducer from './src/features/cart/cartSlice';

const store = configureStore({
  reducer: {
    user: userReducer, //სწორედ ეს არის რაც დავაექსპორტეთ userSlice იდან. export default userSlice.reducer.
    cart: cartReducer,
  },
});

export default store;
