import { useEffect, useState } from "react";
import { getVan } from "../../api";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import styles from "../../styles/Host/HostVanDetail.module.css";

export default function HostVanDetail() {
  const [currentVan, setCurrentVan] = useState(null);

  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function loadVans() {
      try {
        const data = await getVan(id);
        setCurrentVan(data);
      } catch (err) {
        setError(error);
      }
    }
    loadVans();
  }, [id]);

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <div className={styles.hostVanLayoutPage}>
      <Link to="../vans" className={styles.backBtn}>
        <BsArrowLeft /> Back to all vans
      </Link>
      {currentVan && (
        <div className={styles.hostVanLayout}>
          <div className={styles.hostVanDetail}>
            <img src={currentVan.imageUrl} />
            <div className={styles.hostVanInfo}>
              <div>
                <h3>{currentVan.name}</h3>
                <h4>${currentVan.price}/day</h4>
              </div>
              <p className={`${styles.vanCardType} ${styles[currentVan.type]}`}>
                {currentVan.type}
              </p>
            </div>
          </div>

          <nav className={styles.hostVanNav}>
            <NavLink
              to="."
              end
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={{ currentVan }} />
        </div>
      )}
    </div>
  );
}
