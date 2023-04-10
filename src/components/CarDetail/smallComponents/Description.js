import styles from "./Description.module.css";

const Description = (props) => {
  return <p className={styles.text}>{props.text}</p>;
};

export default Description;
