# Day 09 Conditional Rendering Exercise Level 1 Solution
## Answers to Exercise Level 1 Questions
### Answer to Question 1
<p align="justify">In React, conditional rendering is the process of displaying different content based on certain conditions or states. It allows you to create dynamic user interfaces that can adapt to changes in data and user interactions.</p>

### Answer to Question 2
```jsx
//  Using if Statements:
function MyComponent({ condition }) {
  if (condition) {
    return <p>This content is rendered when the condition is true.</p>;
  } else {
    return <p>This content is rendered when the condition is false.</p>;
  }
}
// -----------------------------------------------

// Using Ternary Operator (? :):
function MyComponent({ condition }) {
  return condition ? <p>Condition is true.</p> : <p>Condition is false.</p>;
}

// -----------------------------------------------

// Using Logical AND (&&):
function MyComponent({ condition }) {
  return condition && <p>Condition is true.</p>;
}


// ----------------------------------------------

// Using Switch Statements:
function SeasonalComponent({ season }) {
  switch (season) {
    case 'spring':
      return <SpringComponent />;
    case 'summer':
      return <SummerComponent />;
    // ... other cases ...
    default:
      return <DefaultComponent />;
  }
}

// -----------------------------------------------

// Using Map for Dynamic Rendering:

function ListComponent({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.isVisible && item.name}</li>
      ))}
    </ul>
  );
}


// Using Functions:

function RenderContent({ condition }) {
  if (condition) {
    return <p>Condition is true.</p>;
  } else {
    return <p>Condition is false.</p>;
  }
}

function MyComponent({ condition }) {
  return <RenderContent condition={condition} />;
}
```

### Answer to Question 3

<p align="justify">The answer to this question can actually vary according to usage. Use <code>switch</code> if there will be multiple condition control. If there is no multiple control, I prefer to use a  <code>ternary</code> operator.</p>

# References
- [FreeCodeCamp](https://www.freecodecamp.org/news/react-conditional-rendering)
