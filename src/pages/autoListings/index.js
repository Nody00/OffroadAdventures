import styles from "./index.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Fragment } from "react";
import AutoList from "@/components/AutoListings/AutoListings";
import { MongoClient } from "mongodb";
import Head from "next/head";
const AutoListings = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Check out our vehicles</title>
      </Head>
      <Header />
      <div className="container">
        <h2 className="heading-secondary">Auto Listings</h2>
        <p className="subheading">Choose from our custom built machines</p>
        <AutoList carData={props.carDataProps} />
      </div>
      <div className={styles.footerHack}>
        <Footer />
      </div>
    </Fragment>
  );
};

export default AutoListings;

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://dinokrcic2077:sD59TAEz389ZMbAY@clusterv0.o80titn.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db("carRentalData");
  const carDataCollection = db.collection("carData");
  const carData = await carDataCollection.find().toArray();

  return {
    revalidate: 1,
    props: {
      carDataProps: carData.map((car) => ({
        id: car._id.toString(),
        vehicleName: car.vehicleName,
        image: car.image,
        miles: car.miles,
        fuelType: car.fuelType,
        price: car.price,
        transmission: car.transmission,
      })),
    },
  };
}
