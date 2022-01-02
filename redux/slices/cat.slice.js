import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    breed: null,
    cats: [],
    nextPage: 1,
    error: "",
};

export const catSlice = createSlice({
    name: "cats",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loading = true;
        },
        endLoading: (state) => {
            state.loading = false;
        },
        updateCurrentBreed: (state, action) => {
            state.breed = action.payload;
            state.cats = [];
            state.nextPage = 1;
        },
        updateCatsList: (state, action) => {
            action.payload.forEach((cat) => {
                let catIndex = state.cats.findIndex(
                    (_cat) => _cat.id === cat.id
                );

                if (catIndex < 0) {
                    state.cats.push(cat);
                }
            });
            state.nextPage += 1;
            state.loading = false;
            state.error = "";
        },
        oopsError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const catActions = catSlice.actions;
export default catSlice;
