import styles from "./Vehicles.module.css";
import CarouselComponenet from "./Carousel";

const Vehicles = (props) => {
  return (
    <div className={styles.vehicleSection}>
      <div className="container">
        <h2 className="heading-secondary margin-btm-small">Our Vehicles</h2>
        <p className="subheading">All custom made and ready to roll</p>

        <CarouselComponenet vehicles={props.vehicleData} />
        <p className={styles.text}>
          Vehicles must be returned on the specified date,otherwise you will
          receive a fine!
        </p>
      </div>
    </div>
  );
};

export default Vehicles;
