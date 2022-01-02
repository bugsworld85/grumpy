import { useDispatch, useSelector } from "react-redux";
import BreedDropdown from "../components/BreedDropdown";
import CatList from "../components/CatList";
import { fetchCats } from "../redux/actions/cat.actions";
import styles from "../styles/Home.module.scss";

export default function Home() {
    const dispatch = useDispatch();

    const handleBreedChange = (e) => {
        if (e.target.value) {
            dispatch(fetchCats(e.target.value));
        }
    };

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    <img
                        src="/catlogo.png"
                        alt="catlogo"
                        className={styles.logo}
                    />
                    <br />
                    Jovanni's Cat Browser
                </h1>

                <p className={styles.description}>
                    Everything you need to know about cats!
                </p>

                <p>
                    Breed
                    <BreedDropdown onChange={handleBreedChange} />
                </p>

                <div>
                    <CatList />
                </div>
            </main>
        </div>
    );
}
