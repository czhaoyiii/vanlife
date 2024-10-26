import styles from "../../styles/Host/Income.module.css";
import incomeGraph from "../../assets/income-graph.png";

export default function Income() {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
  ];
  return (
    <div className={styles.incomePage}>
      <div>
        <h1>Income</h1>
        <p style={{ color: "#4d4d4d" }}>
          Last{" "}
          <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
            30 days
          </span>
        </p>
        <h2 className={styles.amount}>$2,260</h2>
        <img
          className={styles.incomeGraph}
          src={incomeGraph}
          alt="Income graph"
        />
      </div>
      <div className={styles.transactionSection}>
        <div className="info-header">
          <h1>Your transactions (3)</h1>
          <p style={{ color: "#4d4d4d" }}>
            Last{" "}
            <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
              30 days
            </span>
          </p>
        </div>
        <div className={styles.transactions}>
          {transactionsData.map((item) => (
            <div key={item.id} className={styles.transaction}>
              <h3>${item.amount}</h3>
              <p>{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
