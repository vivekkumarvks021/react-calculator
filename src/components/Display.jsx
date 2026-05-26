import styles from "../styles/Display.module.css";

function Display({ value, fontSize }) {
  return (
    <div className={styles.display} style={{ fontSize }}>
      <span className={styles.text}>{value}</span>
    </div>
  );
}

export default Display;
