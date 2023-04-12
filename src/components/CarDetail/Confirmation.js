import styles from "./Confirmation.module.css";

const Confirmation = (props) => {
  return (
    <div className={styles.confirmation}>
      <p>Booking successfull!</p>
      <button onClick={props.onHide}>Close</button>
    </div>
  );
};

export default Confirmation;
