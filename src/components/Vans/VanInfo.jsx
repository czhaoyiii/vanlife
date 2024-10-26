import styles from "../../styles/Vans/VanInfo.module.css";

export default function VanInfo({ van, error }) {
  return (
    van && (
      <div className={styles.vanInfo}>
        <img className={styles.vanInfoImage} src={van.imageUrl} alt="" />
        <div className={styles.vanInfoContent}>
          <div className={styles.vanInfoNameType}>
            <h3 className={styles.vanInfoName}>{van.name}</h3>
            <p className={`${styles.vanInfoType} ${styles[van.type]}`}>
              {van.type}
            </p>
          </div>
          <p className={styles.vanInfoPrice}>
            <span style={{ fontWeight: "bold" }}>${van.price}</span>/day
          </p>
          <button className={styles.vanInfoBtn}>Rent this van!</button>
          <p className={styles.vanInfoDescription}>
            <span className={styles.vanInfoDescriptionTitle}>Description</span>
            <br /> {van.description}
          </p>
        </div>
      </div>
    )
  );
}
