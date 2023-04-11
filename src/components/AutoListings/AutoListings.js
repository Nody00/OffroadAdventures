import { Fragment, useEffect } from "react";
import styles from "./AutoListings.module.css";
import VehicleCard from "../VehicleCard";
import { useState } from "react";

const AutoList = (props) => {
  const [carData, setCarData] = useState(props.carData);

  function filterHandler(e) {
    console.log(e.target.value);

    if (e.target.value === "lowest") {
      let arr = [...carData];
      let newArr = arr.sort((a, b) => Number(a.price) - Number(b.price));
      setCarData([...newArr]);
      return;
    }
    if (e.target.value === "highest") {
      let arr = [...carData];
      let newArr = arr.sort((a, b) => Number(b.price) - Number(a.price));
      setCarData([...newArr]);
      return;
    }
  }

  return (
    <div className={styles.AutoListContainer}>
      <div className={styles.sortContainer}>
        <form className={styles.form}>
          <label>Sort By Price:</label>
          <select onChange={filterHandler}>
            <option value="highest" key={1}>
              Highest
            </option>
            <option value="lowest" key={2}>
              Lowest
            </option>
          </select>
        </form>
      </div>
      <ul className={styles.listContainer}>
        {carData.map((car) => (
          <VehicleCard
            key={car.id}
            small={true}
            id={car.id}
            image={car.image}
            vehicleName={car.vehicleName}
            miles={car.miles}
            fuelType={car.fuelType}
            transmission={car.transmission}
            price={car.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default AutoList;
