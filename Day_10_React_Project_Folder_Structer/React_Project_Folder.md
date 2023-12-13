# Day 10 React Project Folder Exercise Level 1 Solution
## Answer to Exercise Level 1 Solution
### Answer to Question 1
<p align="justify">The folder structure and file naming conventions in a React project are essential for maintaining a scalable, organized, and maintainable codebases. A well-defined structure and consistent naming, conventions make it easier for developers to collaborate, understand the code, and navigate through the project.</p>

### Answer to Question 2
```jsx
// Exporting a Component as the Default:

import React from 'react';

class MyComponent extends React.Component {
}
export default MyComponent;

// Named Export:

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Combining Default and Named Exports:

const internalVar = 'I am internal';
export const namedFunction = () => {
};
export default internalVar;
```

### Answer to Question 3
```jsx
import MyComponent from './MyComponent';

// Importing CSS or SCSS:
import './styles.css';
import './styles.scss';

// Importing Images:
import myImage from './myImage.jpg';

// Importing External Libraries:
import axios from 'axios';
```

## :information_source: Info
<p align="justify">The answer to items 4,5 and 6 is avaible in the portfolio exercise (exercise level 2)</p>