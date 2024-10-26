import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  const { currentVan } = useOutletContext();
  return (
    <div>
      <h4 style={{ fontWeight: "700", fontSize: "1rem", marginBottom: "1rem" }}>
        Name: <span style={{ fontWeight: "500" }}>{currentVan.name}</span>
      </h4>
      <h4 style={{ fontWeight: "700", fontSize: "1rem", marginBottom: "1rem" }}>
        Category: <span style={{ fontWeight: "500" }}>{currentVan.type}</span>
      </h4>
      <h4 style={{ fontWeight: "700", fontSize: "1rem" }}>
        Description:{" "}
        <span style={{ fontWeight: "500" }}>{currentVan.description}</span>
      </h4>
    </div>
  );
}
