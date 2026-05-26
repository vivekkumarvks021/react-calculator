import Display from "./Display";
import Button from "./Button";

import styles from "../styles/Calculator.module.css";
import { useState } from "react";

function Calculator() {
  const [expression, setExpression] = useState("0");
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
  const operators = ["+", "-", "*", "/"];

  const handleButtonClick = (value) => {
    const lastCharacter = expression[expression.length - 1];

    // CLEAR
    if (value === "C") {
      setExpression("0");
      return;
    }

    // EQUAL
    if (value === "=") {
      try {
        const result = Function(`return ${expression}`)();
        /*  Javascript internally run this on the above expression
            Function("return 5 + 3 * 2");
            function anonymous() {
            return 5 + 3 * 2;
        */

        setExpression(String(result));
      } catch {
        setExpression("Error");
      }

      return;
    }

    // DOUBLE OPERATOR PREVENTION
    if (operators.includes(lastCharacter) && operators.includes(value)) {
      setExpression(expression.slice(0, -1) + value);

      return;
    }

    // REMOVE INITIAL ZERO
    if (expression === "0") {
      setExpression(value);
    } else {
      setExpression((prev) => prev + value);
    }
  };

  const getFontSize = () => {
    const length = expression.length;

    if (length < 8) return "3rem";

    if (length < 10) return "2.5rem";

    return "2rem";
  };

  return (
    <div className={styles.container}>
      <Display value={expression} fontSize={getFontSize()} />

      <div className={styles.buttonsContainer}>
        {buttons.map((button) => (
          <Button key={button} label={button} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
