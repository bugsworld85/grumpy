import { breedActions } from "../slices/breed.slice";
import axios from "../../services/CatAxios";

export const fetchBreeds = () => {
    return async (dispatch) => {
        dispatch(breedActions.startLoading());

        await axios
            .get(`breeds`)
            .then((response) => {
                dispatch(breedActions.updateBreedsList(response.data));
            })
            .catch(({ response }) => {
                if (response) {
                    dispatch(breedActions.oopsError(response.data.message));
                }
            });
    };
};
