import { useState } from "react";
import styles from "./CarForm.module.css";

const CarForm = (props) => {
  const [priceState, setPriceState] = useState(+props.price);

  function submitHandler(e) {
    e.preventDefault();
  }

  function radioHandler(e) {
    setPriceState(props.price);
    setPriceState((prevState) => Number(prevState) + Number(e.target.value));
  }

  function checkboxHandler(e) {
    // console.log(e.target);
    if (e.target.checked) {
      setPriceState((prevState) => Number(prevState) + Number(e.target.value));
    } else {
      setPriceState((prevState) => Number(prevState) - Number(e.target.value));
    }
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.price}>
        <p>{`$${priceState}/per day`}</p>
      </div>

      <form onSubmit={submitHandler} className={styles.carForm}>
        <div className={styles.pickUpDate}>
          <label htmlFor="pickupDate">Pick-up-date</label>
          <input type="date" id="pickupDate" />
        </div>

        <div className={styles.dropOffDate}>
          <label htmlFor="dropOffDate">Drop-off-date</label>
          <input type="date" id="dropOffDate" />
        </div>

        <div className={styles.durationSelection}>
          <p>Select duration of vehicle use </p>
          <div className={styles.durationContainer}>
            <div className={styles.radioContainer}>
              <input
                onChange={radioHandler}
                type="radio"
                name="duration"
                value="100"
                id="1"
              />
              <label htmlFor="1">1 hour</label>
            </div>
            <p>$100</p>
          </div>
          <div className={styles.durationContainer}>
            <div className={styles.radioContainer}>
              <input
                onChange={radioHandler}
                type="radio"
                name="duration"
                value="200"
                id="2"
              />
              <label htmlFor="2">2 hours</label>
            </div>
            <p>$200</p>
          </div>
          <div className={styles.durationContainer}>
            <div className={styles.radioContainer}>
              <input
                onChange={radioHandler}
                type="radio"
                name="duration"
                value="600"
                id="3"
              />
              <label htmlFor="3">The whole day</label>
            </div>
            <p>$600</p>
          </div>
        </div>

        <div className={styles.extraText}>
          <p>Save Up 25% to rental from 3 days </p>
          <p>Save Up 50% to rental from 5 days </p>
        </div>

        <div className={styles.equipment}>
          <p className={styles.equipmentTitle}>Extra equipment</p>

          <div className={styles.optionContainer}>
            <div className={styles.inputContainer}>
              <input
                type="checkbox"
                name="seat"
                value={50}
                onChange={checkboxHandler}
              />
              <label>Child seat</label>
            </div>
            <p className={styles.equipmentPrice}>
              <span>$50</span>/TOTAL
            </p>
          </div>

          <div className={styles.optionContainer}>
            <div className={styles.inputContainer}>
              <input
                type="checkbox"
                name="camping"
                value={100}
                onChange={checkboxHandler}
              />
              <label>Camping equipment</label>
            </div>
            <p className={styles.equipmentPrice}>
              <span>$100</span>/TOTAL
            </p>
          </div>

          <div className={styles.optionContainer}>
            <div className={styles.inputContainer}>
              <input
                type="checkbox"
                name="instructor"
                value={200}
                onChange={checkboxHandler}
              />
              <label>Professional instructor</label>
            </div>
            <p className={styles.equipmentPrice}>
              <span>$200</span>/PER DAY
            </p>
          </div>

          <div className={styles.optionContainer}>
            <div className={styles.inputContainer}>
              <input
                type="checkbox"
                name="gps"
                value={30}
                onChange={checkboxHandler}
              />
              <label>GPS navigation</label>
            </div>
            <p className={styles.equipmentPrice}>
              <span>$30</span>/PER DAY
            </p>
          </div>

          <div className={styles.optionContainer}>
            <div className={styles.inputContainer}>
              <input
                type="checkbox"
                name="wifi"
                value={50}
                onChange={checkboxHandler}
              />
              <label>WiFi in vehicle</label>
            </div>
            <p className={styles.equipmentPrice}>
              <span>$50</span>/PER DAY
            </p>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.button}>Book this vehicle</button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
