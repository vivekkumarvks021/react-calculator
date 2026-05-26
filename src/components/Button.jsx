import styles from "../styles/Button.module.css";

function Button({ label, onClick }) {
  const operators = ["+", "-", "*", "/", "="];

  const isOperator = operators.includes(label);

  return (
    <button
      className={`${styles.button} ${isOperator ? styles.operator : ""}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}

export default Button;
