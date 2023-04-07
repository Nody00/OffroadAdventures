import { useRouter } from "next/router";
const CarDetails = () => {
  const router = useRouter();
  const params = router.query.carDetails;
  return (
    <h1>
      HEY YAA <p>{params}</p>
    </h1>
  );
};

export default CarDetails;
