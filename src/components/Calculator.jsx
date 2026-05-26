// Importing child components
// Display component -> shows current expression/result
// Button component -> reusable calculator buttons
import Display from "./Display";
import Button from "./Button";

// Importing CSS Module styles
import styles from "../styles/Calculator.module.css";

// Importing useState hook for state management
import { useState } from "react";

function Calculator() {
  // State for storing complete mathematical expression
  // Initial value is "0"
  const [expression, setExpression] = useState("0");

  // All calculator buttons
  // Rendered dynamically using map()
  const buttons = [
    "C",
    "/",
    "*",
    "-",
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "=",
    "1",
    "2",
    "3",
    "0",
  ];

  // Array of valid operators
  // Used for operator validation/replacement
  const operators = ["+", "-", "*", "/"];

  // Handles all button click operations
  const handleButtonClick = (value) => {
    // Getting last character of current expression
    // Used to check operator conditions
    const lastCharacter = expression[expression.length - 1];

    // =========================
    // CLEAR BUTTON FUNCTIONALITY
    // =========================
    if (value === "C") {
      // Reset calculator display
      setExpression("0");

      return;
    }

    // =========================
    // EQUAL BUTTON FUNCTIONALITY
    // =========================
    if (value === "=") {
      try {
        // Evaluating mathematical expression
        // Example:
        // expression = "5+3*2"
        //
        // Internally JavaScript creates:
        // Function("return 5+3*2")
        //
        // Which becomes:
        //
        // function anonymous() {
        //   return 5+3*2;
        // }
        //
        // Final result:
        // 11

        const result = Function(`return ${expression}`)();

        // Updating display with calculated result
        setExpression(String(result));
      } catch {
        // If invalid expression occurs
        // Example:
        // 5+*
        setExpression("Error");
      }

      return;
    }

    // ====================================
    // OPERATOR REPLACEMENT FUNCTIONALITY
    // ====================================
    //
    // Example:
    // 5 + -
    //
    // Result:
    // 5 -
    //
    // Prevents duplicate operators

    if (operators.includes(lastCharacter) && operators.includes(value)) {
      // Removing last operator
      // and adding newly clicked operator
      setExpression(expression.slice(0, -1) + value);

      return;
    }

    // =========================
    // REMOVE INITIAL ZERO
    // =========================
    //
    // Example:
    // 0 -> 5
    //
    // Instead of:
    // 05

    if (expression === "0") {
      setExpression(value);
    } else {
      // Appending clicked value
      // to existing expression
      setExpression((prev) => prev + value);
    }
  };

  // ====================================
  // DYNAMIC FONT SIZE FUNCTION
  // ====================================
  //
  // Reduces display text size
  // when expression becomes larger

  const getFontSize = () => {
    const length = expression.length;

    // Small expression
    if (length < 12) return "3rem";

    // Medium expression
    if (length < 14) return "2.5rem";

    // Large expression
    return "2rem";
  };

  return (
    <div className={styles.container}>
      {/* Calculator display screen */}
      <Display value={expression} fontSize={getFontSize()} />

      {/* Calculator buttons grid */}
      <div className={styles.buttonsContainer}>
        {/* Rendering buttons dynamically */}
        {buttons.map((button) => (
          <Button key={button} label={button} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
