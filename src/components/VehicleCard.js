import Link from "next/link";
import styles from "./VehicleCard.module.css";
import { FaRoad, FaGasPump, FaCheck } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";

const VehicleCard = (props) => {
  return (
    <div className={styles.cardContainer}>
      <img src={props.image} alt="Cool car" />
      <div className={styles.textBox}>
        <p className={styles.name}>{props.vehicleName}</p>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <FaRoad className={styles.icon} />
            <p className={styles.infoText}>{props.miles}</p>
          </div>
          <div className={styles.info}>
            <FaGasPump className={styles.icon} />
            <p className={styles.infoText}>{props.fuelType}</p>
          </div>
          <div className={styles.info}>
            <GiGearStickPattern className={styles.icon} />
            <p className={styles.infoText}>{props.transmission}</p>
          </div>
        </div>
        <div className={styles.featuresContainer}>
          <ul className={styles.featuresList}>
            <li className={styles.feature}>
              <FaCheck className={styles.featureIcon} />
              AirCon
            </li>
            <li className={styles.feature}>
              <FaCheck className={styles.featureIcon} />
              Damage Insurance
            </li>
            <li className={styles.feature}>
              <FaCheck className={styles.featureIcon} />
              Custom offroad capabilities
            </li>
            <li className={styles.feature}>
              <FaCheck className={styles.featureIcon} />
              Plenty of suspension travel
            </li>
            <li className={styles.feature}>
              <FaCheck className={styles.featureIcon} />
              An extra tire
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`${styles.buttonContainer} ${
          props.small ? `${styles.buttonContainerSmall}` : null
        }`}
      >
        <div
          className={`${styles.price} ${
            props.small ? `${styles.priceSmall}` : null
          }`}
        >
          ${props.price}
          <span>/per day</span>
        </div>
        <Link href={props.id}>
          <button
            className={`${styles.button} ${
              props.small ? `${styles.buttonSmall}` : null
            }`}
          >
            RENT IT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VehicleCard;
