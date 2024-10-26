import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { currentVan } = useOutletContext();
  return (
    <img
      src={currentVan.imageUrl}
      style={{ height: "100px", borderRadius: "5px" }}
    />
  );
}
