import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
};

const addtocart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        additem: (state, action) => {
            state.value.push(action.payload);
            console.log("state--",state.value);
            localStorage.setItem('cartItems', JSON.stringify(state.value));
        },

        removeitem: (state, action) => {
            console.log("remove--",action.payload);
            //state.value > 0 ? state.value -= 1:null; // ✅ Decrement the count if it's greater than 0
            state.value = state.value.filter( //It keeps all items except the one we want to remove.
                (item) => item.id !== action.payload.id
            );
            localStorage.setItem('cartItems', JSON.stringify(state.value));
        },
         increaseQty: (state, action) => {
            const item = state.value.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity = (item.quantity || 1) + 1;
            }
            },
         decreaseQty: (state, action) => {
            const item = state.value.find(item => item.id === action.payload.id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
            },

        clearCart: (state) => {
            state.value = [];   // ✅ reset to empty array
        }
    }
});

export const { additem, removeitem, clearCart, increaseQty, decreaseQty } = addtocart.actions;
export default addtocart.reducer;