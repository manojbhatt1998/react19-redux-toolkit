import { configureStore } from '@reduxjs/toolkit';
import addtocart from './slice.js';
import productReducer from './productSlice.js';

const store = configureStore({
    reducer: {
        cart: addtocart,
        Products: productReducer,
        
    },
});

export default store;