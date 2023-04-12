import styles from "./Form.module.css";
import { useRouter } from "next/router";
const HeroForm = () => {
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    router.push("/autoListings");
  }
  return (
    <div>
      <div className={styles.formHeroSpecial2}>
        <div className={styles.smallContainer}>
          <label className={styles.label}>Pick up date</label>
          <input type="date" id="date" name="date" className={styles.input} />
        </div>
        <div className={styles.smallContainer}>
          <label className={styles.label}>Drop off date</label>
          <input className={styles.input} type="date" id="ddate" name="ddate" />
        </div>
        <div className={styles.smallContainer}>
          <label className={styles.label}>Pick vehicle brand</label>
          <select className={styles.input} name="cars" id="cars">
            <option value="" key="1">
              Pick a vehicle
            </option>
            <option value="" key="2">
              Land rover
            </option>
            <option value="" key="3">
              Jeep
            </option>
            <option value="" key="4">
              Ford
            </option>
            <option value="" key="5">
              Toyota
            </option>
          </select>
        </div>
        <div className={styles.smallContainer}>
          <button onClick={handleSubmit} className={styles.button}>
            Find vehicle
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroForm;
