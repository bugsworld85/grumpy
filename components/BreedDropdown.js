import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBreeds } from "../redux/actions/breed.actions";

function BreedDropdown(props) {
    const dispatch = useDispatch();
    const breeds = useSelector((state) => state.breeds.breeds);
    const currentBreed = useSelector((state) => state.cats.breed);

    useEffect(() => {
        dispatch(fetchBreeds());
    }, []);

    return (
        <span>
            <select
                className="btn btn-secondary m-2"
                onChange={props.onChange}
                defaultValue={currentBreed}
            >
                <option>Select Breed</option>
                {breeds.map((breed) => {
                    return (
                        <option value={breed.id} key={breed.id}>
                            {breed.name}
                        </option>
                    );
                })}
            </select>
        </span>
    );
}

BreedDropdown.defaultProps = {
    onChange: (e) => {
        alert(
            `You have selected ${e.target.value} but it does not do anything.`
        );
    },
};

export default BreedDropdown;
