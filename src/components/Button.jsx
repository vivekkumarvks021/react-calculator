// Importing CSS Module styles
import styles from "../styles/Button.module.css";

// Reusable Button component
// Used for rendering all calculator buttons
function Button({ label, onClick }) {
  // Array of operator buttons
  // Used to apply special styling
  const operators = ["+", "-", "*", "/", "="];

  // Checking whether current button
  // is an operator button or not
  const isOperator = operators.includes(label);

  return (
    // Calculator button
    <button
      // Applying common button styles
      // and conditional operator styles
      className={`
        ${styles.button}
        ${isOperator ? styles.operator : ""}
      `}
      // Sending clicked button value
      // back to parent component
      onClick={() => onClick(label)}
    >
      {/* Button text */}
      {label}
    </button>
  );
}

// Exporting Button component
export default Button;
