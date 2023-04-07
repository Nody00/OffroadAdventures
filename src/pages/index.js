import { Fragment } from "react";
import { MongoClient } from "mongodb";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/How";
import Vehicles from "@/components/Vehicles";
import SmallSection from "@/components/Small";
import ReviewSection from "@/components/Reviews";
const HomePage = (props) => {
  return (
    <Fragment>
      <Hero />
      <Services />
      <HowItWorks />
      <Vehicles vehicleData={props.carDataProps} />
      <SmallSection />
      <ReviewSection customerReviews={props.customerDataProps} />
    </Fragment>
  );
};

export default HomePage;

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://dinokrcic2077:sD59TAEz389ZMbAY@clusterv0.o80titn.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db("carRentalData");
  const carDataCollection = db.collection("carData");
  const carData = await carDataCollection.find().toArray();

  const customerCollection = db.collection("customerReviews");
  const customerData = await customerCollection.find().toArray();

  client.close();
  return {
    revalidate: 1500,
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
      customerDataProps: customerData.map((customer) => ({
        id: customer._id.toString(),
        name: customer.customerName,
        review: customer.review,
        image: customer.image,
      })),
    },
  };
}
