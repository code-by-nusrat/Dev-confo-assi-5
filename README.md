🚀 DevStack

DevStack is a developer-focused website that showcases useful technologies, tools, and resources for modern web development. Users can explore different technologies and select the technologies they want to add to their personal stack.

📝 About The Project

DevStack is a responsive React application built to practice React, TypeScript, component-based development, state management, and working with JSON data.

The project provides a clean and simple interface where developers can browse available technologies and build their own technology stack.

🛠️ Technologies Used
HTML
CSS
Tailwind CSS
DaisyUI
JavaScript
TypeScript
React
Vite
JSON
✨ Features
1. Browse Technologies

Users can view a list of available technologies with their names, descriptions, and other information.

2. Build Your Technology Stack

Users can select technologies and add them to their personal stack. They can also remove technologies from their selected stack.

3. Responsive Design

The website is responsive and works properly on desktop, tablet, and mobile devices.

⚛️ React Questions & Answers
1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. React uses JSX to describe what the UI should look like.

It makes React code easier to read and write.

2. What is the difference between props and state?

Props are data passed from a parent component to a child component. Props are read-only.

State is data managed inside a component. State can change when the user interacts with the application.

For example, the selected technologies are stored in state and passed to child components using props.

3. What does the useState hook do, and where did you use it in this project?

The useState hook allows us to create and manage changing data inside a React component.

In this project, I used useState to manage the selected technologies and the technology count.

Example:

const [selectedTech, setSelectedTech] = useState<TechType[]>([]);
const [count, setCount] = useState(0);
4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook lets us run code after a component renders.

I used useEffect to load the technology data from the JSON/API source when the component loads. This allows the application to get the data and then display the technologies.

Example:

useEffect(() => {
    fetch("data.json")
        .then(res => res.json())
        .then(data => setTechs(data));
}, []);
5. Why does every item in a .map() list need a unique key prop?

React needs a unique key to identify each item in a list.

It helps React understand which items were added, removed, or changed, so it can update the UI efficiently.

Example:

techs.map(tech => (
    <TechCard
        key={tech.id}
        tech={tech}
    />
))
6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI depending on a condition.

For example, when there are no technologies in the selected stack, I show an empty-stack message.

{selectedTech.length === 0 ? (
    <p>No technology selected yet.</p>
) : (
    selectedTech.map(tech => (
        <TechCard
            key={tech.id}
            tech={tech}
        />
    ))
)}

Here, the empty message is displayed only when selectedTech.length === 0.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child through props.

For example:

<AvailableTech
    techs={techs}
    selectedTech={selectedTech}
    setSelectedTech={setSelectedTech}
/>

The child can send something back to the parent by calling a function that the parent passed through props.

For example:

const handleSelect = () => {
    setSelectedTech([...selectedTech, tech]);
};

So, the parent passes data and functions to the child through props, and the child can use those functions to update the parent's state.

📌 Project Summary

DevStack was built to practice:

React components
TypeScript
Props and state
useState
useEffect
Conditional rendering
.map() and key
Parent-child communication
Responsive design with Tailwind CSS
Working with JSON data


Nusrat Jahan

Aspiring Full-Stack



















<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories. -->
