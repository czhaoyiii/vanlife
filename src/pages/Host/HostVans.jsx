import { Link } from "react-router-dom";
import styles from "../../styles/Host/HostVans.module.css";
import { useEffect, useState } from "react";
import { getHostVans } from "../../api";

export default function HostVans() {
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
    <Link to={van.id} key={van.id}>
      <div className={styles.hostVan}>
        <img
          className={styles.hostVanImage}
          src={van.imageUrl}
          alt={`Photo of ${van.name}`}
        />
        <div className={styles.hostVanInfo}>
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));
  return (
    <div className={styles.hostVansPage}>
      <h1>Your listed vans</h1>
      {hostVanElements}
    </div>
  );
}
