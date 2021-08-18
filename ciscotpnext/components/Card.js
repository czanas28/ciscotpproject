import styles from "../styles/Card.module.css";

export default function Card({ children, onClick }) {
  return <div className={styles.card} onClick={onClick}>{children}</div>
}
