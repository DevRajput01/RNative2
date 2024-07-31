export const selectTotalPrice = (state) => {
    return state.user.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  