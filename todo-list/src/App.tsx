import { useState } from "react";

import { ITodo } from "./interfaces/ITodo";

import AddTodo from "./components/AddTodo";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import TodoItem from "./components/TodoItem";



function App() {
  const [todos, setTodos] = useState<ITodo[]>([
    { id: '1', name: "Learn React", category: "work", isDone: true },
    { id: '2', name: "Learn TypeScript", category: "work", isDone: false },
    { id: '3', name: "Learn GraphQL", category: "work", isDone: false },
  ]);

  const addNewTodo = (t: ITodo) => {
    setTodos([t, ...todos]);
  }

  return (
    <div className="o-container">
      <AppHeader />

      <AddTodo 
        handleNewTodo={addNewTodo} 
      />

      <ul>
        {todos.map((todo: ITodo) => (
          <TodoItem
          todo={todo} key={todo.name}
        />
        ))}
      </ul>

      <AppFooter />
    </div>
  );
}

export default App;
