import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (x) => x._id === item._id
      );

      if (existingItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existingItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      // 🔢 Calculate item price
      state.itemPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
      );

      // 🚚 Calculate shipping price
      state.shippingPrice = addDecimals(state.itemPrice > 100 ? 0 : 10);

      // 💸 Calculate tax price
      state.taxPrice = addDecimals(Number((0.15 * state.itemPrice).toFixed(2)));

      // 💰 Calculate total price
      state.totalPrice = addDecimals(
        Number(state.itemPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      );

      // 💾 Save to localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    }
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
