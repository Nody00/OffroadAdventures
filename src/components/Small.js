import styles from "./Small.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
const SmallSection = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className={styles.smallSection}>
      <div
        className={`container ${styles.containerModified} ${
          inView ? styles.transition : null
        } ${styles.prepare}`}
      >
        <p className={styles.textFirst}>
          Call today to book your <span>adventure</span>
        </p>
        <p className={styles.text}>
          <FaPhoneAlt className={styles.icon} />
          (800) 421 679
        </p>
        <p className={styles.textFirst}>
          Operators available <span>24/7</span>
        </p>
      </div>
    </div>
  );
};

export default SmallSection;
