import styles from "./Equipment.module.css";
import { FaPlus } from "react-icons/fa";
const Equipment = () => {
  // Pay at Pick-Up+Budget Car+Chilled AC+Automatic+Free cancellation+Unlimited Mileage+Audio input+Bluetooth+Heated seats
  return (
    <div className={styles.grid}>
      <div className={styles.gridItem}>
        <div className={styles.feature}>
          <FaPlus className={styles.icon} />
          <p>Pay at Pick-Up</p>
        </div>
        <div className={styles.feature}>
          <FaPlus className={styles.icon} />
          <p>Budget Car</p>
        </div>
        <div className={styles.feature}>
          <FaPlus className={styles.icon} />
          <p>Chilled AC</p>
        </div>
      </div>
      <div className={styles.gridItem}>
        <div className={styles.feature}>
          <FaPlus className={styles.icon} />
          <p>Automatic</p>
        </div>
        <div className={styles.feature}>
          <FaPlus className={styles.icon} />
          <p>Free cancellation</p>
        </div>
        <div className={styles.feature}>
          <FaPlus className={styles.icon} />
          <p>Unlimited Mileage</p>
        </div>
      </div>
      <div className={styles.gridItem}>
        <div className={styles.feature}>
          <FaPlus className={styles.icon} />
          <p>Audio input</p>
        </div>
        <div className={styles.feature}>
          <FaPlus className={styles.icon} />
          <p>Bluetooth</p>
        </div>
        <div className={styles.feature}>
          <FaPlus className={styles.icon} />
          <p>Heated seats</p>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
