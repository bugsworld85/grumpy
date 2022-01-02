import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    breed: null,
    cats: [],
    nextPage: 0,
    error: "",
    currentCat: null,
    maxPage: 0,
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
            state.loading = true;
            state.breed = action.payload;
            state.cats = [];
            state.nextPage = 0;
            state.error = "";
            state.maxPage = 0;
        },
        updateCatsList: (state, action) => {
            action.payload.data.forEach((cat) => {
                // Prevent duplicates by checking if the cat already exists.
                let catIndex = state.cats.findIndex(
                    (_cat) => _cat.id === cat.id
                );

                if (catIndex < 0) {
                    // push if the cat does not exist yet.
                    state.cats.push(cat);
                }
            });

            // calculate maximum page.
            state.maxPage = Math.ceil(action.payload.meta.total / 10);
            state.nextPage += 1;
            state.loading = false;
            state.error = "";
        },
        resetCurrentCat: (state) => {
            state.currentCat = null;
            state.error = "";
        },
        updateCurrentCat: (state, action) => {
            state.loading = false;
            state.currentCat = action.payload;
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
