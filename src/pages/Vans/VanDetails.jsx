import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getVan } from "../../api";
import { BsArrowLeft } from "react-icons/bs";
import styles from "../../styles/Vans/VanDetails.module.css";
import VanInfo from "../../components/Vans/VanInfo";

export default function VanDetails() {
  const { id } = useParams();
  const [van, setVan] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function loadVans() {
      try {
        const data = await getVan(id);
        setVan(data);
      } catch (err) {
        setError(err);
      }
    }
    loadVans();
  }, [id]);

  const search = location.state?.search || "";

  return (
    <div className={styles.vanDetailPage}>
      <Link to={`..${search}`} relative="path" className={styles.backBtn}>
        <BsArrowLeft /> Back to vans
      </Link>
      <VanInfo van={van} error={error} />
    </div>
  );
}
