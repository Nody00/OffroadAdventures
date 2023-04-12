import { Fragment } from "react";
import Header from "./Header";
import styles from "./Hero.module.css";
import HeroForm from "./Form";
const Hero = () => {
  return (
    <Fragment>
      <div className={styles.heroContainer}>
        <Header />
        <main className={styles.main}>
          <div className={styles.heroTextBox}>
            <p className={styles.heroTitle}>Start your overlanding adventure</p>
            <p className={styles.heroText}>
              Rent a offroading vehicle and go where ever you want ,when ever
              you want. No rock,river or mountain can stop you in one of our
              custom built machines.
            </p>
            <button className={styles.actionButton}>View vehicles</button>
          </div>
          <div className={styles.formContainer}>{/* <HeroForm /> */}</div>
        </main>
      </div>
    </Fragment>
  );
};

export default Hero;
