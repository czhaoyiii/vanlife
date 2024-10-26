import styles from "../../styles/Vans/VansCatalog.module.css";
import { getVans } from "../../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function VansCatalog({ displayedVans, queryParams }) {
  const vanElements = displayedVans.map((van) => (
    <Link key={van.id} to={`${van.id}`} state={{ search: queryParams }}>
      <div className={styles.vanCard}>
        <img className={styles.vanCardImage} src={van.imageUrl} alt="" />
        <div className={styles.vanCardInfo}>
          <div className={styles.vanCardKeyInfo}>
            <h3 style={{ fontWeight: "500" }}>{van.name}</h3>
            <p>
              <span style={{ fontWeight: "bold" }}>${van.price}</span>/day
            </p>
          </div>
          <div className={styles.vanCardTypePlacement}>
            <p className={`${styles.vanCardType} ${styles[van.type]}`}>
              {van.type}
            </p>
          </div>
        </div>
      </div>
    </Link>
  ));

  return <div className={styles.catalog}>{vanElements}</div>;
}
