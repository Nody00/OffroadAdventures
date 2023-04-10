import { useState } from "react";
import Description from "./smallComponents/Description";
import Equipment from "./smallComponents/Equipment";
import Review from "./smallComponents/Review";
import styles from "./CarDetailCard.module.css";
import { useRouter } from "next/router";

const CarDetailCard = (props) => {
  const router = useRouter();
  const carId = router.query.carDetails;
  const [carDetails, setCarDetails] = useState({
    description: true,
    equipment: false,
    review: false,
  });

  function descriptionHandler() {
    setCarDetails({
      description: true,
      equipment: false,
      review: false,
    });
  }
  function equipmentHandler() {
    setCarDetails({
      description: false,
      equipment: true,
      review: false,
    });
  }

  function reviewHandler() {
    setCarDetails({
      description: false,
      equipment: false,
      review: true,
    });
  }

  async function onAddReview(data) {
    try {
      const userReview = {
        username: data.username,
        userEmail: data.userEmail,
        userReview: data.userReview,
        userRating: data.userRating,
        carId: carId,
      };

      const response = await fetch("/api/submitReview/", {
        method: "POST",
        body: JSON.stringify(userReview),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Sending review error");
      }

      router.reload();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h2 className="heading-secondary">{props.data.name}</h2>
      <img
        src={props.data.image}
        alt="Offroading vehicle"
        className={styles.image}
      />
      <ul className={styles.menu}>
        <li
          onClick={descriptionHandler}
          className={`${carDetails.description ? styles.activeLi : null}`}
        >
          <p
            className={`${styles.menuLink} ${
              carDetails.description ? styles.active : null
            }`}
          >
            Vehicle Description
          </p>
        </li>
        <li
          onClick={equipmentHandler}
          className={`${carDetails.equipment ? styles.activeLi : null}`}
        >
          <p
            className={`${styles.menuLink} ${
              carDetails.equipment ? styles.active : null
            }`}
          >
            Equipment
          </p>
        </li>

        <li
          onClick={reviewHandler}
          className={`${carDetails.review ? styles.activeLi : null}`}
        >
          <p
            className={`${styles.menuLink} ${
              carDetails.review ? styles.active : null
            }`}
          >
            Reviews
          </p>
        </li>
      </ul>
      <div className={styles.menuContainer}>
        {carDetails.description && (
          <Description text={props.data.description} />
        )}
        {carDetails.equipment && <Equipment />}
        {carDetails.review && (
          <Review reviewAdd={onAddReview} reviewData={props.reviewData} />
        )}
      </div>
    </div>
  );
};

export default CarDetailCard;
