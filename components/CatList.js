import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import CatItem from "./CatItem";
import Loading from "./Loading";
import { fetchCats } from "../redux/actions/cat.actions";

function CatList() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { query } = router;

    const cats = useSelector((state) => state.cats.cats);
    const loading = useSelector((state) => state.cats.loading);
    const currentBreed = useSelector((state) => state.cats.breed);
    const nextPage = useSelector((state) => state.cats.nextPage);
    const maxPage = useSelector((state) => state.cats.maxPage);

    const handleLoadMore = () => {
        dispatch(fetchCats(currentBreed, nextPage, false));
    };

    useEffect(() => {
        if (currentBreed === null && query.breed_id) {
            dispatch(fetchCats(query.breed_id));
        }
    }, []);

    return (
        <div>
            <div className="row" style={{ justifyContent: "center" }}>
                {cats.map((cat) => (
                    <CatItem id={cat.id} url={cat.url} key={cat.id} />
                ))}
            </div>

            {loading ? (
                <Loading />
            ) : (
                <p className="text-center mt-5">
                    {nextPage < maxPage ? (
                        <button
                            className="btn btn-success"
                            onClick={handleLoadMore}
                        >
                            I Want More Cats
                        </button>
                    ) : null}
                </p>
            )}
        </div>
    );
}

export default CatList;
