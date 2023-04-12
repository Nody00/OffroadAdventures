import styles from "./Services.module.css";
import { FaCarCrash, FaMountain, FaCampground } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import { useInView } from "react-intersection-observer";
const Services = () => {
  const [ref, inView, entry] = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <div ref={ref} className={styles.section}>
      <div
        className={`container ${inView ? styles.transition : null} ${
          styles.prepare
        }`}
      >
        <p className="heading-secondary">Our Services</p>
        <div className={styles.servicesContainer}>
          <div className={styles.service}>
            <FaCarCrash className={styles.serviceIcon} />
            <p className="heading-tertiary">Damage protection</p>
            <p className={styles.serviceText}>
              We offer both insurance for damage,as well as on demand services
              via our service team,no matter how deep the ditch we will pull you
              out.Got a flat tire,simply use your provided radio to signal our
              service team!
            </p>
          </div>
          <div className={styles.service}>
            <FaMountain className={styles.serviceIcon} />
            <p className="heading-tertiary">Guided tours</p>
            <p className={styles.serviceText}>
              Join our overlanding experts and other guests as you visit
              beautifull country side hills,mountains and trails.Enjoy
              offroading without the fear of getting stuck or lost.
            </p>
          </div>
          <div className={styles.service}>
            <FaCampground className={styles.serviceIcon} />
            <p className="heading-tertiary">Camping spots</p>
            <p className={styles.serviceText}>
              Completely free and ready camping spots on our designated
              routes.Our camping spots are equiped with water,food and
              toiletries.As well as a radio transmitter in case your own
              comunication device fails.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
