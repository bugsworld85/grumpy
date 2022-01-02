import { catActions } from "../slices/cat.slice";
import axios from "../../services/CatAxios";

export const fetchCats = (breed, page = 1, refresh = true) => {
    return async (dispatch) => {
        dispatch(catActions.startLoading());

        await axios
            .get(`images/search`, {
                params: {
                    limit: 10,
                    size: "small",
                    page,
                    breed_id: breed,
                },
            })
            .then((response) => {
                if (refresh) {
                    dispatch(catActions.updateCurrentBreed(breed));
                }
                dispatch(catActions.updateCatsList(response.data));
            })
            .catch(({ response }) => {
                if (response) {
                    dispatch(catActions.oopsError(response.data.message));
                }
            });
    };
};
