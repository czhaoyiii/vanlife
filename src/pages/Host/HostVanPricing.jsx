import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { currentVan } = useOutletContext();
  console.log(currentVan);
  return (
    <h3 style={{ fontSize: "24px", fontWeight: "500" }}>
      ${currentVan.price}
      <span style={{ fontSize: "16px", color: "#4d4d4d" }}>/day</span>
    </h3>
  );
}
