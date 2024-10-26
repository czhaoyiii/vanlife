import { BsStarFill } from "react-icons/bs";
import reviewsGraph from "../../assets/reviews-graph.png";
import styles from "../../styles/Host/Reviews.module.css";

export default function Reviews() {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
    },
  ];
  return (
    <div className={styles.reviewsPage}>
      <div>
        <h1>Your reviews</h1>
        <p style={{ color: "#4d4d4d" }}>
          Last{" "}
          <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
            30 days
          </span>
        </p>
        <img
          className={styles.reviewsGraph}
          src={reviewsGraph}
          alt="Reviews graph"
        />
      </div>
      <div className={styles.reviewsSection}>
        <h1>Reviews (2)</h1>
        <div className={styles.reviews}>
          {reviewsData.map((review) => (
            <div key={review.id}>
              <div className={styles.review}>
                {[...Array(review.rating)].map((_, i) => (
                  <BsStarFill className={styles.reviewStar} key={i} />
                ))}
                <div className={styles.info}>
                  <p className={styles.name}>{review.name}</p>
                  <p className={styles.date}>{review.date}</p>
                </div>
                <p>{review.text}</p>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
