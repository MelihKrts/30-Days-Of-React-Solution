# Day 03 Setting Up Exercise Level 1 Solution

## Answers to Exercise Level 1 Questions
1) A node is a working environment that allows Javascript to run on the server <br>
2) A package is a module or collection of modules <br>
3) A module is a function that can be imported or exported, and a package is a structure that contains modules together. <br>
4) Created in 2009. It allows users to use and distribute Javascript modules in their registry. NPM allows to create, use and distribute <br>
5) It is a module packager used to unify Javascript files used in web applications. <br>
6) - With CDN method 
   - `create-react-app`
   - `Vite(pnpm create vite (React is selected))`
  <br>
7) There are 3 main folders: node_modules, src and public. These Folders are; <br>
- node_modules : This is the folder with all the packages required for React. <br>

  ## Src

- **`src`** : The main folder containing the source code of the application. Inside the src folder; 
  - `index.html` : The only HTML page in the React application <br>
  
  - `favicon.ico` : Icon file <br>
  
  - `manifest.json` : Used to make the application a progressive web application. <br>
  
  -  `components` : Contains React components used in different parts of the application. <br>
  
  - `pages` : Contains React components for different pages (for example, home page, about page). <br>
  
  - `styles` : Contains the general style files of the application. <br>
  
  - `assets` : A folder that usually contains static files such as images. <br>
  
  - `App.js`: The main component of the application. It can contain other components.
  -index.js: The starting point of the application. It contains ReactDOM's `render` function and usually mounts the `App` component into an HTML element called `root`.  <br>

  # Public
  **`public`** : Used to host static files. <br>
   index.html: The main HTML file of the application. This file is the starting point of the React application and contains a div named root. <br>

  - `favicon.ico`: The favicon of the website, the small icon that appears in the browser tab. 
  
  - `manifest.json`: A JSON file that defines the properties of the web application. For example, the application theme, icons and other settings can be defined here. 
  
  - `robots.txt`: A file containing instructions to web crawlers about the sitemap and crawlable content. 
  
  - `images`: A subfolder containing image files. 
  - `videos`: A subfolder containing video files. 
  
  ## File Structure
 - `package.json` : Writes a list of packages used by the application 
  
 - `gitignore` : The files that are not to be transferred to Github in the project are written into the `.gitignore` file and not transferred to Github. 
  
 - `README.md` : Used to give information about the project. 
  
- `yarn.lock` , `package.json` : Security files for packages. <br>

----
1) Visual Studio Code

2) ES7+ React/Redux/React-Native snippets added [Extension Link](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) <br>
3)   [See exercises_app](https://github.com/MelihKrts/30-Days-Of-React-Solution/tree/main/Day_03_Setting_Up/exercises_app)
  
 

