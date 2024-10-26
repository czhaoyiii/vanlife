import VansCatalog from "../../components/Vans/VansCatalog";
import styles from "../../styles/Vans/Vans.module.css";
import VansFilter from "../../components/Vans/VansFilter";
import { useEffect, useState } from "react";
import { getVans } from "../../api";
import { useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  useEffect(() => {
    async function loadVans() {
      try {
        const data = await getVans();
        setVans(data);
      } catch (err) {
        setError(err);
      }
    }
    loadVans();
  }, []);

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const queryParams = `?${searchParams.toString()}`;

  return (
    <div className={styles.vans}>
      <h1 className={styles.vansTitle}>Explore our van options</h1>
      <VansFilter
        typeFilter={typeFilter}
        handleFilterChange={handleFilterChange}
        searchParams={searchParams}
      />
      <VansCatalog displayedVans={displayedVans} queryParams={queryParams} />
    </div>
  );
}
