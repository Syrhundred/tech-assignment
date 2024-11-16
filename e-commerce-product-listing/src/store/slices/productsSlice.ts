import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {Product} from "@/types/product";

interface ProductsState {
    items: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductsState = {
    items: [],
    loading: false,
    error: null,
};

export const fetchProducts = createAsyncThunk<Product[]>(
    "products/fetchProducts",
    async () => {
        const res = await fetch("https://my-json-server.typicode.com/Syrhundred/db/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error loading products";
            });
    },
});

export default productsSlice.reducer;
