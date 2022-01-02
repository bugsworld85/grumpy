import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CatItem";
import { fetchCats } from "../redux/actions/cat.actions";

function CatList() {
    const dispatch = useDispatch();
    const cats = useSelector((state) => state.cats.cats);
    const currentBreed = useSelector((state) => state.cats.breed);
    const nextPage = useSelector((state) => state.cats.nextPage);

    const handleLoadMore = () => {
        dispatch(fetchCats(currentBreed, nextPage, false));
    };

    return (
        <div>
            <div className="gallery">
                {cats.map((cat) => (
                    <CartItem id={cat.id} url={cat.url} key={cat.id} />
                ))}
            </div>
            {cats.length > 0 && cats.length >= 10 ? (
                <p className="text-center">
                    <button
                        className="btn btn-success"
                        onClick={handleLoadMore}
                    >
                        I Want More Cats
                    </button>
                </p>
            ) : null}
        </div>
    );
}

export default CatList;
