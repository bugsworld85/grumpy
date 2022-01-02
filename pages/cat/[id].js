import Link from "next/link";
import { useRouter } from "next/router";

export default function Cat(props) {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <main>
                <button
                    className="btn btn-primary"
                    onClick={() => router.back()}
                >
                    Back
                </button>
                This is the cat
            </main>
        </div>
    );
}
