import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk( 'products' , async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data;
});

const initialState = {
    products: [],
    status: 'idle',
    error: null,
};

const productSlice = createSlice({
    name:'products',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = 'loading';
        }).addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.products = action.payload;
        }).addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
});

// export { fetchProducts };
export default productSlice.reducer;
