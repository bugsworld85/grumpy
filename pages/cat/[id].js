import { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import CatDetails from "../../components/CatDetails";
import Loading from "../../components/Loading";

import { fetchCat } from "../../redux/actions/cat.actions";

function Cat({ id }) {
    const dispatch = useDispatch();
    const currentCat = useSelector((state) => state.cats.currentCat);
    const loading = useSelector((state) => state.cats.loading);
    const error = useSelector((state) => state.cats.error);

    useEffect(() => {
        dispatch(fetchCat(id));
    }, []);

    return (
        <div className="container">
            <main className="row">
                {error !== "" ? (
                    <div className="col-md-12">
                        <h1 className="text-center">Oops!</h1>
                        <p className="text-center">{error}</p>
                        <p className="text-center">
                            <Link href="/">
                                <a className="btn btn-primary">
                                    Just show me other cats will you?
                                </a>
                            </Link>
                        </p>
                    </div>
                ) : loading ? (
                    <div style={{ height: "100vh", display: "flex" }}>
                        <Loading />
                    </div>
                ) : (
                    <CatDetails cat={currentCat} />
                )}
            </main>
        </div>
    );
}

Cat.getInitialProps = ({ query }) => {
    return {
        id: query.id, // had to use this instead of router.query
    };
};

export default Cat;
