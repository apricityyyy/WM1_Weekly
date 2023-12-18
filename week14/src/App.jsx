import TodoList from "./TodoList";
import { useState, createContext } from "react";

export const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div className="todo-list">
        <div className="heading">
          <h2>My ToDo APP</h2>
        </div>
        <TodoList />
        <button
          onClick={() => {
            setTheme((prevTheme) => (prevTheme == "dark" ? "light" : "dark"));
          }}
        >
          Change Theme
        </button>
      </div>
    </ThemeContext.Provider>
  );
}