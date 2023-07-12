import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStock = createAsyncThunk('stock/get', async(ticker, thunkAPI) =>{
    try{
        const response = await axios.get(`https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=Rzpae4MFZWrcwl2A7fI5J6iQSy5GK1sG`);
        return response.data
    }catch(e){
        const message = (e.response && e.response.data && e.response.data.message) || e.message || e.toString();
        return thunkAPI.rejectWithValue(message);
    }
})


export const stockSlice = createSlice({
    name: 'stock',
    initialState: {
        stock: null,
        isError: false,
        isSuccess: false,
        isLoading: false,
        message: ''
    },
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchStock.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(fetchStock.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.stock = action.payload
        })
        .addCase(fetchStock.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.user = null;
        })
    }
})

export default stockSlice.reducer;