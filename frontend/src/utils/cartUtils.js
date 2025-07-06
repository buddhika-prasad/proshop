export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {

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

      return state;
}

