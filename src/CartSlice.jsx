import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
  };
  
  const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      // -----------------------------
      // Add item to cart
      // -----------------------------
      addItem: (state, action) => {
        const newItem = action.payload;
  
        // Check if item already exists
        const existingItem = state.items.find(
          (item) => item.name === newItem.name
        );
  
        if (!existingItem) {
          state.items.push({ ...newItem, quantity: 1 });
        }
      },
  
      // -----------------------------
      // Update quantity
      // -----------------------------
      updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
  
        const item = state.items.find((item) => item.name === name);
  
        if (item) {
          item.quantity = quantity;
        }
      },
  
      // -----------------------------
      // Remove item completely
      // -----------------------------
      removeItem: (state, action) => {
        const name = action.payload;
  
        state.items = state.items.filter((item) => item.name !== name);
      }
    }
  });
  
  export const { addItem, updateQuantity, removeItem } = cartSlice.actions;
  export default cartSlice.reducer;