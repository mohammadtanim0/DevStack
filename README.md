# Dev Stack

Dev Stack is a modern and responsive web application that helps developers explore different technologies and build their ideal development stack.

The website allows users to browse frontend, backend, database, programming language, styling, and DevOps technologies and add their preferred technologies to a personal stack.

## 🚀 Features

- Modern and clean developer-focused UI
- Responsive design for desktop, tablet, and mobile
- Navigation bar with:
  - Home
  - Technologies
  - Projects
  - About
  - Contact
  - Sign In
  - Sign Up
- Hero section with project introduction
- Explore Technologies section
- Technology cards with:
  - Technology logo
  - Technology name
  - Description
  - Category
  - Difficulty level
  - Rating
  - Technology badge
- Add technologies to "Your Stack"
- Remove individual technologies
- Remove all selected technologies
- Modern gradient typography
- Responsive technology grid
- Footer with useful links and social links

## 🛠️ Technologies Used

This project is built using modern frontend technologies.

- React
- Vite
- JavaScript
- HTML5
- CSS3
- Tailwind CSS
- DaisyUI

## 📁 Project Structure

```text
dev-stack/
│
├── public/
│   └── assets/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TechnologyCard.jsx
│   │   ├── TechnologyGrid.jsx
│   │   ├── StackPanel.jsx
│   │   └── Footer.jsx
│   │
│   ├── data/
│   │   └── technologies.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md 
React question:
1.What is JSX, and why is it used in React?
-JSX(javascript XML).
-It's use it for makes code easier to read.
2.What is the difference between props and state?
-Props is data passed from parent to child.And State is data manage inside a component.
3.What does the useState hook do, and where did you use it in this project?
-useState is a React Hook used to create and manage changing data inside a component.
4.What does the useEffect hook do, and why did you need it to load the JSON data?
-useEffect is used to perform side effects in a React component.
5.Why does every item in a .map() list need a unique key prop?
-Without a proper key, React gives a warning and may have difficulty efficiently updating the list
6.What is conditional rendering? Show one place you used it.
-Conditional rendering means displaying different UI depending on a condition.
7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
-A parent sends data to a child using props.
