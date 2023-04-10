import { Rating } from "react-simple-star-rating";
import styles from "./SmallReview.module.css";
const SmallReviewComponent = (props) => {
  return (
    <div className={styles.reviewContainer}>
      <p className={styles.name}>{props.name}</p>
      <Rating
        initialValue={props.rating}
        readonly={true}
        size={26}
        className={styles.stars}
        fillColor={"#c92a2a"}
      />
      <p className={styles.review}>{props.review}</p>
    </div>
  );
};

export default SmallReviewComponent;
