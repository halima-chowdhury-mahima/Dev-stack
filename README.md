# 🚀 Dev Stack

## 🌐 Live Demo

[View Live Website](https://dev-stack-sigma.vercel.app/)

## 📖 About the Project

**Dev Stack** is a responsive web application that helps developers explore different technologies and build their preferred development stack. Users can browse technologies from different categories such as Frontend, Backend, Database, Languages, Styling, and DevOps.

The application allows users to add technologies to their personal stack, remove individual technologies, or clear the entire stack. It also prevents duplicate selections and provides toast notifications for different user actions.

The project was built using **React, TypeScript, Tailwind CSS, Vite, and React Toastify** with a strong focus on reusable components, responsive design, and clean user interaction.

---

## ✨ Key Features

- **Explore Technologies** — Browse a collection of modern development technologies loaded dynamically from a JSON file.

- **Build Your Own Stack** — Add technologies to the "Your Stack" section and create your preferred development stack.

- **Interactive Stack Management** — Remove individual technologies or clear the entire stack with responsive UI feedback and toast notifications.

---

## 🛠️ Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- React Toastify
- JSON
- Git & GitHub

---

# 🧠 React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows us to write HTML-like syntax inside JavaScript or TypeScript. React uses JSX because it makes creating and understanding user interfaces easier and keeps the UI structure and JavaScript logic together.

---

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component. A child component should not directly modify the props it receives.

**State** is data managed inside a component and it can change over time. When state changes, React can re-render the component to display the updated information.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to store and update state inside a functional component.

In this project, I used `useState` to store the technologies, selected technologies, loading state, and other interactive UI states.

Example:

```tsx
const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);
```

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform side effects in React components.

In this project, I used `useEffect` to fetch technology data from the JSON file when the application loads.

Example:

```tsx
useEffect(() => {
  fetch("/technologies.json")
    .then((res) => res.json())
    .then((data: Technology[]) => {
      setTechnologies(data);
      setLoading(false);
    });
}, []);
```

The empty dependency array `[]` makes the effect run when the component is first mounted.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a rendered list. It helps React understand which item has been added, removed, or updated.

Example:

```tsx
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
```

Here, `technology.id` is used as the unique key.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI depending on a condition.

In this project, I used conditional rendering in the **Your Stack** section. When no technology is selected, an empty stack message is displayed. When technologies are selected, the selected items are displayed instead.

Example:

```tsx
{selectedTechs.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  <div>
    {selectedTechs.map((tech) => (
      <StackItem
        key={tech.id}
        tech={tech}
        handleRemove={handleRemove}
      />
    ))}
  </div>
)}
```

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Data is passed from a parent component to a child component using **props**.

Example:

```tsx
<TechnologyCard
  technology={technology}
  handleAddToStack={handleAddToStack}
/>
```

Here, the parent sends `technology` and `handleAddToStack` to the child.

A child component can communicate with the parent by calling a function received through props.

Example:

```tsx
onClick={() => handleAddToStack(technology)}
```

When the button is clicked, the child calls the function provided by the parent.

---

## 📱 Responsive Design

The application is designed to work across different screen sizes:

- Mobile — 1 technology card per row
- Tablet — 2 technology cards per row
- Desktop — 3 technology cards per row with the Your Stack sidebar
- Responsive navigation with a mobile hamburger menu

---

## 📂 Project Structure

```text
src/
├── assets/
│   ├── banner-stack.png
│   └── logo.png
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Technologies.tsx
│   ├── TechnologyCard.tsx
│   ├── YourStack.tsx
│   ├── StackItem.tsx
│   ├── Loading.tsx
│   └── Footer.tsx
│
├── types/
│   └── technology.ts
│
├── App.tsx
├── main.tsx
└── index.css

public/
└── technologies.json
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go to the project directory:

```bash
cd react-Dev-Stack
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

---

## 👩‍💻 Author

**Halima Chowdhury Mahima**

GitHub: `halima-chowdhury-mahima`

---

## 📄 License

This project was created for educational purposes as part of a web development assignment.