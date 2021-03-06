import Link from "next/link";

function CartItem({ id, url }) {
    return (
        <div className="col-md-3 mb-4">
            <div className="card">
                <img src={url} alt={id} className="card-img-top" />
                <div className="card-body">
                    <Link href={`/cat/${id}`}>
                        <a className="btn btn-primary d-block">View Details</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
