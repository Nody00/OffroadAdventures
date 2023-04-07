import styles from "./ReviewCard.module.css";

const dummyData = {
  id: "642fece761a38c0c7393666c",
  image:
    "https://images.unsplash.com/photo-1614375516536-ee3b08717d3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  name: "David Brooks",
  review:
    "Incredible service and machinery! My friends and I had a amazing time driving the Toyota through the country side. The people were incredibly friendly and helpful,everything was provided fuel,food,tents,other supplies and some good company hahaha.We will definetly come back next year for another adventure!",
};
const ReviewCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.textBox}>
        <p className={styles.reviewText}>{props.review}</p>

        <div className={styles.smallerText}>
          <div>
            <p className={styles.name}>{props.name}</p>
            <p className={styles.additionalText}>
              Offroading adventures customer
            </p>
          </div>
          <img src={props.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
