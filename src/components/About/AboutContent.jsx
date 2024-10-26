import styles from "../../styles/About/AboutContent.module.css";
import { Link } from "react-router-dom";

export default function AboutContent() {
  const contents = [
    {
      title: "Rent a Campervan",
      description:
        "Our comprehensive fleet of campervans caters to every need and budget. From compact pop-top vans to spacious motorhomes, we have the perfect vehicle to suit your adventure plans. Each campervan is meticulously maintained and equipped with all the essentials for a comfortable and enjoyable journey.",
    },
    {
      title: "Host Your Campervan",
      description:
        "If you own a campervan that's not in constant use, why not share it with others and earn some extra income? With #VANLIFE, you can list your campervan for rent and reach a wide network of potential renters. We handle the booking process, payments, and insurance, so you can sit back and relax while earning passive income.",
    },
    {
      title: "Our Community",
      description:
        "Join our vibrant community of campervan enthusiasts and connect with fellow adventurers. Share your experiences, exchange tips, and discover new destinations along the way. We're here to support you every step of your van life journey.",
    },
    {
      title: "Embrace the #VANLIFE Experience",
      description:
        "#VANLIFE is more than just renting a campervan; it's a lifestyle. It's about embracing the freedom of the open road, exploring new horizons, and living life on your own terms. Let us be your guide as you embark on your unforgettable #VANLIFE adventure.",
    },
  ];

  const contentElements = contents.map((content) => (
    <div key={content.title}>
      <h3>{content.title}</h3>
      <p className={styles.contentDescription}>{content.description}</p>
    </div>
  ));

  return (
    <div className={styles.aboutContent}>
      <div className={styles.aboutContentIntro}>
        <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
        <p style={{ marginBottom: "24px" }}>
          Welcome to <span style={{ fontWeight: "700" }}>#VANLIFE</span>, your
          one-stop destination for campervan adventures. Whether you're a
          seasoned campervan enthusiast or a curious newcomer, we're here to
          make your road trip dreams a reality.
        </p>
        <p>
          At Vanlife, we believe in the transformative power of van life. It's
          an opportunity to escape the ordinary, embrace the open road, and
          connect with nature on a deeper level. It's about forging new paths,
          discovering hidden gems, and creating memories that will last a
          lifetime.
        </p>
      </div>
      <div className={styles.contents}>{contentElements}</div>
      <div className={styles.aboutVans}>
        <h2 className={styles.aboutVansTitle}>
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>
        <Link to="../vans" className={styles.vansButton}>
          Explore our vans
        </Link>
      </div>
    </div>
  );
}
