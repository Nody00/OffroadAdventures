import styles from "./How.module.css";
import { FaTruckMonster, FaToolbox, FaRoute } from "react-icons/fa";
const HowItWorks = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <p className={`heading-secondary ${styles.serviceTitle}`}>
          How it works
        </p>
        <div className={styles.servicesContainer}>
          <div className={styles.service}>
            <FaTruckMonster className={styles.serviceIcon} />
            <p className={`heading-tertiary ${styles.serviceTitle}`}>
              Sign up and pick your vehicle
            </p>
            <p className={styles.serviceText}>
              We have a wide variety of events and dates to chose,however our
              main draw is our custom offroad vehicles.From Toyotas to Land
              rovers,each of our vehicles is custom made and prepared for even
              the most difficult of terain.
            </p>
          </div>
          <div className={styles.service}>
            <FaToolbox className={styles.serviceIcon} />
            <p className={`heading-tertiary ${styles.serviceTitle}`}>
              Pickup your equipment at desired date
            </p>
            <p className={styles.serviceText}>
              Pick up your offroading weapon and other camping supplies at your
              picked date.Either venture out alone or with a group of experts
              into the wilderness.Dont forget to enjoy yourselves.
            </p>
          </div>
          <div className={styles.service}>
            <FaRoute className={styles.serviceIcon} />
            <p className={`heading-tertiary ${styles.serviceTitle}`}>
              Enjoy your adventure
            </p>
            <p className={styles.serviceText}>
              Follow our made and ready trails and campsites or venture out
              alone.Don't forget the insurance just in case. Go thru
              valleys,over mountains and rivers our vehicles are built to
              withstand and counquer all obstacles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
