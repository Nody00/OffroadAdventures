import Carousel from "react-multi-carousel";
import styles from "./Reviews.module.css";
import ReviewCard from "./ReviewCard";
import { useInView } from "react-intersection-observer";
const ReviewSection = (props) => {
  const [ref, inView, entry] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      //   slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
      //   slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      //   slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div ref={ref} className={styles.bigContainer} id="reviews">
      <div
        className={`container ${inView ? styles.transition : null} ${
          styles.prepare
        }`}
      >
        <h2 className="heading-secondary margin-btm-small">Customer Reviews</h2>
        <p className="subheading">Listen to our satisfied customers</p>
      </div>
      <div className={styles.reviewSection}>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={false}
          autoPlay={false}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          containerClass={styles.carouselContainer}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          //   deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {props.customerReviews.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              review={review.review}
              image={review.image}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ReviewSection;
