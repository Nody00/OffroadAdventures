import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Fragment } from "react";
import styles from "./index.module.css";
import { MongoClient, ObjectId } from "mongodb";
import CarDetailCard from "@/components/CarDetail/CarDetailCard";
const CarDetails = (props) => {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className={styles.grid}>
          <CarDetailCard data={props.carData} reviewData={props.reviewData} />
          <div>form</div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default CarDetails;

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://dinokrcic2077:sD59TAEz389ZMbAY@clusterv0.o80titn.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db("carRentalData");
  const carDataCollection = db.collection("carData");
  const carIds = await carDataCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: true,
    paths: carIds.map((car) => ({
      params: {
        carDetails: car._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const id = context.params.carDetails;

  const client = await MongoClient.connect(
    "mongodb+srv://dinokrcic2077:sD59TAEz389ZMbAY@clusterv0.o80titn.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db("carRentalData");
  const carDataCollection = db.collection("carData");
  const car = await carDataCollection.findOne({ _id: new ObjectId(id) });

  const reviewData = db.collection("reviews");
  const reviews = await reviewData.find({ carId: id }).toArray();

  client.close();

  return {
    revalidate: 1,
    props: {
      carData: {
        id: car._id.toString(),
        name: car.vehicleName,
        fuel: car.fuelType,
        miles: car.miles,
        price: car.price,
        transmission: car.transmission,
        image: car.image,
        description: car.description,
      },
      reviewData: reviews.map((review) => ({
        username: review.username,
        id: review._id.toString(),
        userReview: review.userReview,
        userRating: review.userRating,
        carId: review.carId,
      })),
    },
  };
}
