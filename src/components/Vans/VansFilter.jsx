import { useSearchParams } from "react-router-dom";
import styles from "../../styles/Vans/VansFilter.module.css";

export default function VansFilter({ typeFilter, handleFilterChange }) {
  const vanTypes = ["simple", "rugged", "luxury"];

  const typeElements = vanTypes.map((vanType) => (
    <button
      onClick={() => handleFilterChange("type", vanType)}
      key={vanType}
      className={`${styles.vanTypeButton} ${
        typeFilter === vanType ? styles[vanType] : null
      }`}
    >
      {vanType}
    </button>
  ));

  return (
    <div className={styles.vansFilter}>
      {typeElements}
      {typeFilter && (
        <button
          onClick={() => handleFilterChange("type", null)}
          className={styles.clearBtn}
        >
          Clear all
        </button>
      )}
    </div>
  );
}
