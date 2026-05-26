// Importing CSS Module styles
import styles from "../styles/Display.module.css";

// Display component
// Responsible for showing the current
// calculator expression/result
function Display({ value, fontSize }) {
  return (
    // Main display container
    // Dynamic font size is applied inline
    <div className={styles.display} style={{ fontSize }}>
      {/* Text expression value of calculator */}
      <span className={styles.text}>{value}</span>
    </div>
  );
}

// Exporting component
export default Display;
