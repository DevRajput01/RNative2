import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  avatar: 'https://randomuser.me/api/portraits/men/40.jpg', // Default user picture
  cartItems: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserProfile: (state, action) => {

      state.avatar = action.payload.avatar || state.avatar;
      state.name = action.payload.name || state.name;
      state.email = action.payload.email || state.email;
    },
    SetName: (state, action) => {
      state.name = action.payload;
    },
    SetEmail: (state, action) => {
      state.email = action.payload;
    },
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.cartItems.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.cartItems.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity = Math.max(1, itemInCart.quantity - 1); //if 0 then price is not added
      }
    },
  },
});

export const {
  setUserProfile,
  SetName,
  SetEmail,
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity
} = userSlice.actions;

export default userSlice.reducer;




