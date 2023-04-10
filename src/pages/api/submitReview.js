import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://dinokrcic2077:sD59TAEz389ZMbAY@clusterv0.o80titn.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db("carRentalData");
    const reviewCollection = db.collection("reviews");
    const response = await reviewCollection.insertOne(data);

    client.close();

    res.status("203").json({ message: "Review inserted" });
  }
}
