import { Link } from "react-router-dom";
import styles from "../../styles/Home/Home.module.css";

export default function HomeHero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroTitle}>
        You got the travel plans, we got the travel vans.
      </h1>
      <p className={styles.heroCaption}>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link className={styles.heroBtn} to="vans">
        Find your van
      </Link>
    </div>
  );
}
