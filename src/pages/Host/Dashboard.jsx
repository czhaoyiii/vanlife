import { Link } from "react-router-dom";
import styles from "../../styles/Host/Dashboard.module.css";
import { BsStarFill } from "react-icons/bs";
import { getHostVans } from "../../api";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [vans, setVans] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function loadVans() {
      try {
        const data = await getHostVans();
        setVans(data);
      } catch (err) {
        setError(err);
      }
    }
    loadVans();
  }, []);

  const hostVanElements = vans.map((van) => (
    <div key={van.id} className={styles.hostVan}>
      <img
        className={styles.hostVanImage}
        src={van.imageUrl}
        alt={`Photo of ${van.name}`}
      />
      <div className={styles.hostVanInfo}>
        <h3>{van.name}</h3>
        <p>${van.price}/day</p>
      </div>
      <Link to={`vans/${van.id}`} key={van.id}>
        View
      </Link>
    </div>
  ));

  return (
    <>
      <div className={styles.earnings}>
        <div className={styles.info}>
          <h1>Welcome!</h1>
          <p>
            Income last{" "}
            <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
              30 days
            </span>
          </p>
          <h2>$2,260</h2>
        </div>
        <Link to="income">Details</Link>
      </div>

      <div className={styles.reviews}>
        <div className={styles.reviewScore}>
          <h2>Review score</h2>
          <div className={styles.score}>
            <BsStarFill className={styles.stars} />
            <p>
              <span>5.0</span>/5
            </p>
          </div>
        </div>
        <Link to="reviews">Details</Link>
      </div>
      <div className={styles.vans}>
        <div className={styles.top}>
          <h2>Your listed vans</h2>
          <Link to="vans">View all</Link>
        </div>
        {hostVanElements}
      </div>
    </>
  );
}
