# React Calculator

A mobile-style calculator built using **React JS** and **CSS Modules**.

This project supports basic mathematical operations with proper **BODMAS evaluation** and a clean responsive UI similar to a real mobile calculator.

---

# Features

- Addition
- Subtraction
- Multiplication
- Division
- Clear Screen
- Mathematical Expression Evaluation
- Operator Replacement
- Responsive UI
- Dynamic Display Handling
- CSS Modules Styling

---

# Tech Stack

- React JS
- JavaScript
- CSS Modules

---

# Project Structure

```txt
src/
│
├── components/
│   ├── Calculator.jsx
│   ├── Display.jsx
│   ├── Button.jsx
│
├── styles/
│   ├── Calculator.module.css
│   ├── Display.module.css
│   ├── Button.module.css
│
├── App.jsx
├── main.jsx
```

---

# Functionality

## Expression-Based Calculation

The calculator stores the complete mathematical expression as a string.

Example:

```txt
5+3*2
```

Instead of calculating step-by-step, the entire expression is evaluated together.

---

# BODMAS Support

The calculator follows proper mathematical precedence:

1. Brackets
2. Multiplication
3. Division
4. Addition
5. Subtraction

Example:

```txt
5 + 3 * 2
```

Result:

```txt
11
```

---

# Expression Evaluation

The calculator uses the JavaScript `Function` constructor for expression evaluation.

```js
const result = Function(`return ${expression}`)();
```

---

# How Function Constructor Works

If:

```js
expression = "5 + 3 * 2";
```

Then:

```js
Function(`return ${expression}`);
```

becomes:

```js
Function("return 5 + 3 * 2");
```

Internally JavaScript creates:

```js
function anonymous() {
  return 5 + 3 * 2;
}
```

And immediately executes it using:

```js
()
```

Final Result:

```txt
11
```

---

# Operator Replacement Logic

If the last character is already an operator and the user clicks another operator, the previous operator gets replaced.

Example:

```txt
5 + -
```

Becomes:

```txt
5 -
```

Logic:

```js
if (operators.includes(lastCharacter) && operators.includes(value)) {
  setExpression(expression.slice(0, -1) + value);

  return;
}
```

---

# Important Concepts Used

## useState

Used for managing calculator expression state.

```js
const [expression, setExpression] = useState("0");
```

---

# Dynamic Rendering

Buttons are rendered dynamically using `.map()`.

```js
buttons.map((button) => <Button key={button} label={button} />);
```

---

# CSS Modules

CSS Modules are used to avoid global CSS conflicts.

Example:

```js
import styles from "./Button.module.css";
```

---

# Run Project

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

# Author

Vivek
