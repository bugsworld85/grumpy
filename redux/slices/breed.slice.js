import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    breeds: [],
    error: "",
};

export const breedSlice = createSlice({
    name: "breeds",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loading = true;
        },
        endLoading: (state) => {
            state.loading = false;
        },
        updateBreedsList: (state, action) => {
            state.loading = false;
            state.breeds = action.payload;
            state.error = "";
        },
        oopsError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const breedActions = breedSlice.actions;
export default breedSlice;
