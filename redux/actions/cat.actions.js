import { catActions } from "../slices/cat.slice";
import axios from "../../services/CatAxios";

export const fetchCats = (breed, page = 0, refresh = true) => {
    return async (dispatch) => {
        dispatch(catActions.startLoading());
        if (refresh) {
            dispatch(catActions.updateCurrentBreed(breed));
        }

        if (breed === null) {
            dispatch(
                catActions.updateCatsList({
                    data: [],
                    meta: {
                        total: 0,
                        currentPage: 0,
                    },
                })
            );
            return;
        }

        await axios
            .get(`images/search`, {
                params: {
                    format: "json",
                    order: "ASC",
                    limit: 10,
                    size: "small",
                    page,
                    breed_id: breed,
                },
            })
            .then((response) => {
                dispatch(
                    catActions.updateCatsList({
                        data: response.data,
                        meta: {
                            total: parseInt(
                                response.headers["pagination-count"]
                            ),
                            // not being used for now.
                            currentPage: parseInt(
                                response.headers["pagination-page"]
                            ),
                        },
                    })
                );
            })
            .catch(({ response }) => {
                if (response) {
                    alert(
                        "Apologies but we could not load new cats for you at this time! Miau!"
                    );
                    dispatch(
                        catActions.oopsError(
                            "Apologies but we could not load new cats for you at this time! Miau!"
                        )
                    );
                }
            });
    };
};

export const fetchCat = (id) => {
    return async (dispatch) => {
        dispatch(catActions.startLoading());
        dispatch(catActions.resetCurrentCat());

        await axios
            .get(`images/${id}`)
            .then((response) => {
                dispatch(catActions.updateCurrentCat(response.data));
            })
            .catch(({ response }) => {
                if (response) {
                    alert(
                        "Apologies but we could not load this cat for you at this time! Miau!"
                    );
                    dispatch(
                        catActions.oopsError(
                            "Apologies but we could not load this cat for you at this time! Miau!"
                        )
                    );
                }
            });
    };
};
