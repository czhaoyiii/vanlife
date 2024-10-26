import styles from "../../styles/Home/ServiceHighlights.module.css";
import { BiPaperPlane } from "react-icons/bi";
import { BsStars, BsTelephoneOutbound } from "react-icons/bs";
import { PiCoinsBold } from "react-icons/pi";

export default function ServiceHighlights() {
  const services = [
    {
      icon: <BsStars />,
      title: "Flexible cancellation up to 72h prior to your journey",
      description:
        "Cancel your trip for a full refund up to 20 days or opt for an 85% value voucher up to 72h before your pick-up date!",
    },
    {
      icon: <BiPaperPlane />,
      title: "One-way trips are available",
      description:
        "Collect and return your campervan at over 70 locations spanning Singapore, Malaysia, and Vietnam.",
    },
    {
      icon: <BsTelephoneOutbound />,
      title: "RAC Breakdown Cover",
      description:
        "Our collaboration with RAC ensures 24/7 nationwide breakdown coverage to ensure your adventure stays on course.",
    },
    {
      icon: <PiCoinsBold />,
      title: "Book now, pay later!",
      description:
        "With our highly flexible cancellation policy for campervans, you're only required to pay the complete booking amount 20 days before your trip begins.",
    },
  ];

  const serviceElements = services.map((service) => (
    <div key={service.title} className={styles.service}>
      <div className={styles.serviceIcon}>{service.icon}</div>
      <div>
        <h3 className={styles.serviceTitle}>{service.title}</h3>
        <p className={styles.serviceDescription}>{service.description}</p>
      </div>
    </div>
  ));

  return (
    <div className={styles.serviceHighlights}>
      <h2 className={styles.servicesTitle}>
        The leading road trip service in Singapore, Malaysia, and Vietnam
      </h2>
      <div className={styles.services}>{serviceElements}</div>
    </div>
  );
}
