import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import breedSlice from "./slices/breed.slice";
import catSlice from "./slices/cat.slice";

const store = configureStore({
    reducer: {
        breeds: breedSlice.reducer,
        cats: catSlice.reducer,
    },
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

export default store;
