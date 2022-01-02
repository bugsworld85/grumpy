import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function CartDetails({ cat }) {
    const router = useRouter();
    const breed = useSelector((state) => state.cats.breed);

    return cat ? (
        <div className="col-md-12">
            <p className="mt-5">
                {breed ? (
                    <button
                        className="btn btn-primary"
                        onClick={() => router.back()}
                    >
                        Back
                    </button>
                ) : (
                    <Link href={`/?breed_id=${cat.breeds[0].id}`}>
                        <a className="btn btn-primary">Back</a>
                    </Link>
                )}
            </p>
            <div className="card mb-5">
                <img src={cat.url} alt={cat.id} className="card-img-top" />
                <div className="card-body">
                    <h1 className="card-title">{cat.breeds[0].name}</h1>
                    <h3>Origin: {cat.breeds[0].origin}</h3>
                    <h4>{cat.breeds[0].temperament}</h4>
                    <p className="card-text">{cat.breeds[0].description}</p>
                </div>
            </div>
        </div>
    ) : null;
}

export default CartDetails;
