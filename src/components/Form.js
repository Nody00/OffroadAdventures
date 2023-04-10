import styles from "./Form.module.css";

const HeroForm = () => {
  return (
    <form className={styles.form}>
      <div>
        <label>Pick up date</label>
        <input type="date" id="date" name="date" />
      </div>
      <div>
        <label>Drop off date</label>
        <input type="date" id="ddate" name="ddate" />
      </div>
      <div>
        <label>Pick vehicle brand</label>
        <select name="cars" id="cars">
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
      <div>
        <button>Find vehicle</button>
      </div>
    </form>
  );
};

export default HeroForm;