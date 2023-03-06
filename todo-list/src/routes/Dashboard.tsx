import { useState } from "react"

import { Link } from "react-router-dom"
import AddTodo from "../components/AddTodo"
import AppHeader from "../components/AppHeader"
import TodoItem from "../components/TodoItem"
import { ITodo } from "../interfaces/ITodo"

export default () => {
    const [todos, setTodos] = useState<ITodo[]>([
        { id: '1', name: "Learn React", category: "work", isDone: true },
        { id: '2', name: "Learn TypeScript", category: "work", isDone: false },
        { id: '3', name: "Learn GraphQL", category: "work", isDone: false },
      ]);

    const addNewTodo = (t: ITodo) => {
        setTodos([t, ...todos]);
      }
    return(
        <main>
            <Link to="/settings">Settings</Link>
            <AppHeader />

            <AddTodo handleNewTodo={addNewTodo}/>

            <ul>
                {todos.map((todo: ITodo) => (
                    // <TodoItem todo={todo} key={todo.name} />
                    <TodoItem key={todo.id} {...todo} />
                ))}
            </ul>
        </main>
    )
}