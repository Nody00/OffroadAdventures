import styles from "./Review.module.css";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import SmallReviewComponent from "./SmallReviewComp";
const Review = (props) => {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [textValid, setTextValid] = useState(true);

  const handleRating = (rate) => {
    setRating(rate);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleText = (e) => {
    setText(e.target.value);
  };

  function handleForm(e) {
    e.preventDefault();

    // validation checks

    if (name.trim() === "" || name.trim().length === 0) {
      setNameValid(false);
      return;
    }

    if (email.trim() === "" || !email.includes("@")) {
      setEmailValid(false);
      return;
    }
    if (text.trim() === "" || text.trim().length === 0) {
      setTextValid(false);
      return;
    }

    if (nameValid && emailValid && textValid) {
      const reviewData = {
        username: name,
        userEmail: email,
        userReview: text,
        userRating: rating,
      };
      props.reviewAdd(reviewData);
      setName("");
      setEmail("");
      setText("");

      setNameValid(true);
      setEmailValid(true);
      setTextValid(true);
    }
  }

  return (
    <div>
      <div className={styles.reviewContainer}>
        {props.reviewData.map((review) => (
          <SmallReviewComponent
            name={review.username}
            rating={review.userRating}
            review={review.userReview}
            key={review.id}
          />
        ))}
      </div>
      <form onSubmit={handleForm} className={styles.form}>
        <h3 className="heading-tertiary">Leave a review</h3>
        <p className="subheading margin-btm-medium">
          Your personal data will not be published or sold to a 3rd party
        </p>

        <div className={styles.ratingContainer}>
          <p>Your rating of this vehicle</p>
          <Rating
            onClick={handleRating}
            initialValue={0}
            size={32}
            className={styles.stars}
            fillColor={"#c92a2a"}
          />
        </div>

        <div className={styles.inputContainer}>
          <input
            className={!nameValid ? `${styles.error}` : null}
            onChange={handleName}
            type="text"
            placeholder={!nameValid ? "Enter a valid name" : "Name"}
            required
            minLength={3}
            maxLength={20}
            value={name}
          />

          <input
            className={!emailValid ? `${styles.error}` : null}
            onChange={handleEmail}
            type="email"
            placeholder={!nameValid ? "Enter a valid email" : "Email"}
            required
            value={email}
          />
        </div>
        <div className={styles.textareaContainer}>
          <textarea
            className={!textValid ? `${styles.error}` : null}
            onChange={handleText}
            name="comment"
            placeholder={!textValid ? "Enter a valid review" : "Enter a review"}
            required
            maxLength={1000}
            value={text}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button>Submit Review</button>
        </div>
      </form>
    </div>
  );
};

export default Review;
